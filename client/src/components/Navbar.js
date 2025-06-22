import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Hotel Booking</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/bookings">My Bookings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
