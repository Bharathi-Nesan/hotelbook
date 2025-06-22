import React from 'react';
import './Confirmation.css';

function Confirmation() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h2>Booking Confirmed! ✅</h2>
        <p>Thank you for booking with us.</p>
        <p>You will receive an email with your booking details shortly.</p>
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
}

export default Confirmation;
