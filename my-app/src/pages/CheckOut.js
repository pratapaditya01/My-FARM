import React, { useState } from 'react';
import "./CheckOut.css"

const CheckOut = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',   
    city: '',
    state: '',
    zip: '',
    cartItems: cartItems, 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save form data');
      }

    } catch (error) {
      console.error('Error:', error.message);
      // Handle error, show error message to user
    }
  };  

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className='formData'>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="state" className="form-label">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="zip" className="form-label">Zip:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="landmark" className="form-label">Landmark:</label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Proceed with Cash on Delivery</button><span className="free-delivery">+free Delivery</span>
      </form>
    </div>
  );
};  

export default CheckOut;
