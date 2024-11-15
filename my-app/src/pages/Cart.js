import React from "react";
import { FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from "react-router-dom";

const Cart = ({ cartItems, onRemoveItem, onIncreaseQuantity }) => {
  const totalCartPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemToRemove.id) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          // If count is 1, remove the item from the cart
          return null;
        }
      }
      return item;
    }).filter(Boolean); // Filter out null values (removed items)
    onRemoveItem(updatedCartItems);
  };

  const increaseQuantity = (itemToIncrease) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemToIncrease.id) {
        return { ...item, count: item.count + 1 }; // Increment count by 1
      }
      return item;
    });
    onIncreaseQuantity(updatedCartItems);
  };

  return (
    <div className="container">
      <h1 className="text-center">
        <FaShoppingCart />
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="row mb-4">
              <div className="col-md-3 col-sm-12 mb-3 mb-md-0">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-9 col-sm-12">
                <h3>{item.name}</h3>
                <p className="text-muted"> {item.description}</p>
                <p className="text-info">Price: ₹{item.price}</p>
                <p>
                  <span className="text-danger">Quantity:</span>{" "}
                  <button onClick={() => removeFromCart(item)} className="btn btn-link"><FaMinus /></button>
                  <span className="mx-2">{item.count}</span>
                  <button onClick={() => increaseQuantity(item)} className="btn btn-link"><FaPlus /></button>
                </p>
                <p className="text-success">Total Price: ₹{item.price * item.count}</p>
              </div>
            </div>
          ))}
          <p className="mt-4 text-center">Total Cart Price: ₹{totalCartPrice}</p>
          <div className="text-center">
            <Link to="CheckOut"><button className="btn btn-danger">Check Out</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
