import React from 'react';
import './MyBookings.css';

function MyBookings({ bookings }) {
  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="bookings-container">
          {bookings.map((booking, index) => (
            <div className="booking-card" key={index}>
              <img src={booking.image} alt={booking.hotelName} className="hotel-image" />
              <div className="booking-details">
                <h3>{booking.hotelName}</h3>
                <p><strong>Booked By:</strong> {booking.customerName}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                <p><strong>Room Type:</strong> {booking.roomType}</p>
                <p><strong>Rating:</strong> {booking.rating} ⭐</p>
                <p><strong>Price:</strong> ₹{booking.price}</p>
                <p><strong>Check-in:</strong> {booking.checkIn}</p>
                <p><strong>Check-out:</strong> {booking.checkOut}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
