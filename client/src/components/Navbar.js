import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h1>Hotel Booking</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/bookings">My Bookings</Link>
        {user ? (
          <>
            <span className="user">Hi, {user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
