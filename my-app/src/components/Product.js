import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Product.css";

const Product = ({ products, onAddToCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = Cookies.get("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const addToCart = (product) => {
    onAddToCart(product);
    
    let updatedCart = cart.slice();

    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].count++;
    } else {
      updatedCart.push({ ...product, count: 1 });
    }

    Cookies.set("cart", JSON.stringify(updatedCart), { expires: 7, path: '/' });

    setCart(updatedCart);
  };

  return (
    <div>
      <h1 className="top-heading">Our Fresh & Pure Milk Items</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">₹{product.price}</p>
              </div>
            </Link>
            <div className="product-footer">
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
