import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account created for " + username);
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
