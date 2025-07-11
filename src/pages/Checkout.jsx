import React from 'react';

const Checkout = () => {
  const handlePayment = async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const options = {
      key: 'rzp_test_SuUQnEe92BjnyD',
      amount: total * 100,
      currency: 'INR',
      name: 'Photo Store',
      description: 'Purchase Photos',
      handler: function (response) {
        alert('Payment Successful! Transaction ID: ' + response.razorpay_payment_id);
        localStorage.removeItem('cart');
        window.open('/assets/sample.jpg', '_blank');
      },
      prefill: {
        name: 'Customer',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#121212'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default Checkout;