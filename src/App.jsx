import React from 'react';
import './App.css';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="app">
      <h1>Photo Store</h1>
      <Login />
      <Gallery />
      <Cart />
      <Checkout />
    </div>
  );
};

export default App;