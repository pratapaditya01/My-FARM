import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import products from "./components/productData"; 
import CheckOut from "./pages/CheckOut";
import Cookies from "js-cookie";
import Slider from "./components/Slider";import TopBanner from "./components/TopBanner";
import WhyStore from "./components/WhyStore";
import Footer from "./components/Footer";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cartData = Cookies.get("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cartItems), { expires: 2, path: '/' });
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].count += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  const handleRemoveItem = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.count, 0);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div>
        
        <Slider />
        <TopBanner />
        <Navbar setSearchQuery={setSearchQuery} cartItemsCount={cartItemsCount} />
        
        <Routes>
          <Route
            exact
            path="/"
            element={<ProductList products={filteredProducts} onAddToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onIncreaseQuantity={handleIncreaseQuantity}
            />}
          />
          <Route
            path="/cart/CheckOut"
            element={<CheckOut cartItems={cartItems} />}
          />
        </Routes>
        
        <WhyStore />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
