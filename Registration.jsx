
import React, { useState } from 'react';
import "./Registration.css";


function RegisterForm() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };
  
  const handlelastNamechange = (event) => {
    setlastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleconfirmpasswordchange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    fetch('https://localhost:44324/api/Account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the registration is successful, display a success message
          alert('Registration successful');
        } else {
          // If the registration fails, display an error message
          setError('An error occurred');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
  };

  return (
  

    <div className="register-form-container">
      <form onSubmit={handleButtonClick}>
        <h2>SIGN UP</h2>
        <br></br>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handlefirstNameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handlelastNamechange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={confirmpassword}
            onChange={handleconfirmpasswordchange}
            className="form-control"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary">
          SIGN UP
        </button>
        
      </form>
    </div>
  );
}

export default RegisterForm;