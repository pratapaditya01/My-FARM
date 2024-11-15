import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaLeaf } from 'react-icons/fa';
import "./Navbar.css"; // Import CSS file

const Navbar = ({ setSearchQuery, cartItemsCount }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchToggle = () => {
    setSearchVisible(!searchVisible);
    // Clear search value when toggling
    setSearchValue("");
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchValue);
    }
  };

  return (
    
    <nav className="navbar">
    
      <div className="container">
        {/* Brand name */}
        <div className="brand">
          <Link to="/">
            <FaLeaf className="icon" />
            myFarm
          </Link>
        </div>
        
        {/* Search bar */}
        <div className="search-container">
          {!searchVisible && (
            <button className="search-toggle" onClick={handleSearchToggle}>
              <FaSearch className="icon" />
            </button>
          )}
          {searchVisible && (
            <form onSubmit={handleSearchSubmit}>
              <input
                className="search-input"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
              />

            </form>
          )}
        </div>
        
        {/* Cart icon */}
        <div className="cart-container">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="icon" />
            {cartItemsCount > 0 && (
              <span className="badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
