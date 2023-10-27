
import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';
import './Login.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://localhost:44324/api/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the login is successful, set loggedIn to true
          setLoggedIn(true);
        } else {
          // If the login fails, display an error message
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
  };

  return (
    <div className='main-form'>
 
    <div className='login-container'>
      {loggedIn ? (
        // Redirect to the dashboard page if loggedIn is true
        <Navigate to="/course" />
      ) : (
        // Display the login form if loggedIn is false
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">LOGIN</button>
        </form>
      )}
    </div>
   
   </div>
  );
}


export default LoginForm;