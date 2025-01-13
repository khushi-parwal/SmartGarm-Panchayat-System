


import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

function Alogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate= useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://smartgarm-panchayat-system-1.onrender.com/adminlogin', { username, password })
      .then((response) => {
        setMessage(response.data.message); // Display success message
        console.log('Login successful:', response.data);
        navigate('/admindash');
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message); // Display error message
        } else {
          setMessage('An error occurred. Please try again.');
        }
        console.error('Login error:', error);
      });
  };

  return (
    <section className='admin-over'>
  
    <div className="adminlogin-container">
      <h1>Welcome to SmartGram</h1>
      <form onSubmit={handleLogin}>
      <div className='adminlogin-class'>
        <label htmlFor="username">
          <FontAwesomeIcon icon={faUser} className='icon-space' />User Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} required
        /></div>

        <div className='adminlogin-class'>
        <label htmlFor="password">
          <FontAwesomeIcon icon={faLock} className='icon-space' />Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        /></div>
        
        {/* <div className="remember-me">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div> */}
        <div className='buttons-buttons'>
        <button type="submit">LOGIN</button></div>
      </form>
      
      {message && <p className="message">{message}</p>}
      
      
    </div>
    
    </section>
  );
}

export default Alogin;
