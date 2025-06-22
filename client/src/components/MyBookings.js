import React from 'react';
import './MyBookings.css';

function MyBookings({ bookings }) {
  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <img src={booking.hotel.image} alt={booking.hotel.name} />
            <h3>{booking.hotel.name}</h3>
            <p><strong>Location:</strong> {booking.hotel.location}</p>
            <p><strong>Price:</strong> ₹{booking.hotel.price}</p>
            <p><strong>Room No:</strong> {booking.roomNumber}</p>
            <p><strong>Check-In:</strong> {booking.checkIn}</p>
            <p><strong>Check-Out:</strong> {booking.checkOut}</p>
            <p><strong>Booked by:</strong> {booking.name}</p>
            <p><strong>Payment:</strong> {booking.payment}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;
