// App.js
import React, { useState } from 'react';
import '../App.css';

import Header from '../component/Header';

function Login() {
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Here, you would typically send a request to a server to verify the username and password
    // and receive a token or session ID in response. For this example, we'll assume the login is successful.

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
    <div class="overlay">
      <div  className="left-section">
      <img src="image.png" alt="description de l'image" />
      </div>
      <div className='ligne'></div>
      <div className="right-section">
        <h1 id='title1'> <span className='up'>Enter as a <span className='color'>Guest</span> </span> <img src="Group 158.png" className='idk' alt="description de l'image" /></h1>
        <h1>Login</h1>
        <br></br>

        <form onSubmit={handleLogin} className='right-section'>
          <label htmlFor="usernameInput" >Email adresse</label>
          <br></br>
          <input type="text" id="usernameInput" className='btn' value={username} onChange={handleUsernameChange} />
          <br></br>
          <label htmlFor="passwordInput" >Mot de passe </label>
          <br></br>
          <input type="password" id="passwordInput" className='btn' value={password} onChange={handlePasswordChange} />
          <br></br>
          <button type="submit" className='login'>Login</button>
        </form>
        <p>Forget Password ? </p>
        <p> <span className='color'>You don’t have an Account </span>,<a >Register</a></p>
      </div>

      {isLoggedIn && (
        <div className="success-message">
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  ); 
}

export default Login;
