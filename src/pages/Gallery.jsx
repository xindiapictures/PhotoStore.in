import React, { useState } from 'react';

const Gallery = () => {
  const photos = [
    { id: 1, title: 'Sunset', url: '/assets/sample.jpg', price: 100 },
    { id: 2, title: 'Mountains', url: '/assets/sample.jpg', price: 150 }
  ];

  const addToCart = (photo) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(photo);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(photo.title + ' added to cart');
  };

  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} width="150" />
            <p>{photo.title}</p>
            <p>₹{photo.price}</p>
            <button onClick={() => addToCart(photo)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;