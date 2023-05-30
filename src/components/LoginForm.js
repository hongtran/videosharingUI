import React, { useState, useEffect } from 'react';
import '../App.css';
import api from '../api';
import { AuthContext } from '../App';

const LoginForm = () => {
  const { dispatch } = React.useContext(AuthContext);
  const { state: authState } = React.useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
    const response = await api.post('/users/login', { email, password });
    console.log('Login successful!', response.data);
    dispatch({
        type: 'LOGIN',
        payload: response.data,
    });
    } catch (error) {
    console.error('Login failed!', error.response.data);
    // Perform any necessary actions after failed login, such as displaying an error message
    }
    setEmail('');
    setPassword('');
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Login/Register</button>
    </form>
  );
};

export default LoginForm;
