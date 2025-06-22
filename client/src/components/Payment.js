import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment successful!');
    navigate('/confirmation');
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handlePayment}>
        <h2>Payment Details</h2>
        <input
          type="text"
          placeholder="Card Number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          required
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          type="password"
          placeholder="CVV"
          required
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
