import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data) setCart(JSON.parse(data));
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, idx) => (
        <div key={idx}>
          <p>{item.title} - ₹{item.price}</p>
        </div>
      ))}
      <p><strong>Total:</strong> ₹{cart.reduce((sum, item) => sum + item.price, 0)}</p>
    </div>
  );
};

export default Cart;