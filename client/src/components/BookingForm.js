import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ selectedHotel, onClose, onBook }) {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('Single');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      customerName: name,
      hotelName: selectedHotel.name,
      location: selectedHotel.location,
      price: selectedHotel.price,
      rating: selectedHotel.rating,
      image: selectedHotel.image,
      roomType,
      checkIn,
      checkOut,
    };

    onBook(bookingData);
    onClose();
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form">
        <h2>Book {selectedHotel.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>Your Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Room Type:</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option>Single</option>
            <option>Double</option>
            <option>Deluxe</option>
          </select>

          <label>Check-in Date:</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />

          <label>Check-out Date:</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />

          <button type="submit">Confirm Booking</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
