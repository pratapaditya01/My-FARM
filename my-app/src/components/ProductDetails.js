import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"

const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="alert alert-danger">Product not found</div>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="details-container">
            <div className="image-column">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </div>
            <div className="details-column">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Price:</td>
                    <td>₹{product.price}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <button onClick={handleAddToCart} className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
