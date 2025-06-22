import React from 'react';
import './HotelList.css';

function HotelList({ hotels, onBook }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-card">
          <img src={hotel.image} alt={hotel.name} />
          <h3>{hotel.name}</h3>
          <p>Location: {hotel.location}</p>
          <p>Rating: {hotel.rating} ⭐</p>
          <p>Price: ₹{hotel.price}</p>
          <button onClick={() => onBook(hotel)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
