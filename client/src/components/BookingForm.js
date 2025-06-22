import React, { useState } from 'react';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';

function BookingForm({ selectedHotel, onClose, onBook }) {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      checkIn,
      checkOut,
      hotel: selectedHotel,
      roomNumber: Math.floor(Math.random() * 900) + 100
    };

    onBook(bookingData);
    onClose();
    navigate('/payment', { state: { booking: bookingData } });
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <h2>Book {selectedHotel.name}</h2>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          required
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <input
          type="date"
          required
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <button type="submit">Confirm Booking</button>
        <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
      </form>
    </div>
  );
}

export default BookingForm;
