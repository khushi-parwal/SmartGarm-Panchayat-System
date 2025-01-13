import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginnew.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://smartgarm-panchayat-system-1.onrender.com/login', { username, password })
      .then((response) => {
        setMessage(response.data.message); 
        console.log('Login successful:', response.data);

        // Save user ID in localStorage to simulate a session
        localStorage.setItem('userId', response.data.userId);

        navigate('/userdash'); 
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message); 
        } else {
          setMessage('An error occurred. Please try again.');
        }
        console.error('Login error:', error);
      });
  };

  

  return (
    <section className="login-over">
      <div className="login-container">
        <h1>Welcome to SmartGram</h1>
        <form onSubmit={handleLogin}>
          <div className="login-class">
            <label htmlFor="username">
              <FontAwesomeIcon icon={faUser} className="icon-space" />
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="login-class">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} className="icon-space" />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="buttons">
            <button type="submit">LOGIN</button>
          </div>
        </form>

        {message && <p className="message">{message}</p>}


        <div className="signup-link">
          Need an account? <Link to="/register">SIGN UP</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
