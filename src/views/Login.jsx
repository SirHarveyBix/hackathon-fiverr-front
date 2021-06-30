/* eslint-disable no-unused-vars */
import axios from 'axios';
import Slideshow from '../commons/Slideshow';
import React, { useState, useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import './Login.css';

function Login() {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const { setIsLog } = useContext(LoginContext);

  const handlePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        pseudo,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          setIsLog(false);
        } else {
          setIsLog(true);
        }
        console.log(response.data);
      });
  };

  return (
    <div className='signUpForm'>
      <form onSubmit={handleSubmit}>
        <label className='field' htmlFor='firstname'>
          {/* <input
            id='firstname'
            type='firstname'
            name='firstname'
            onChange={handleFirstname}
            placeholder='Firstname :'
            required
          />
        </label>
        <label className='field' htmlFor='lastname'>
          <input
            id='lastname'
            type='lastname'
            name='lastname'
            onChange={handleLastname}
            placeholder='Lastname :'
            required
          /> */}
        </label>
        <label className='field' htmlFor='pseudo'>
          <input
            id='pseudo'
            type='pseudo'
            name='pseudo'
            onChange={handlePseudo}
            placeholder='Pseudo :'
            required
          />
        </label>
        <label className='field' htmlFor='password'>
          <input
            id='password'
            type='password'
            name='password'
            onChange={handlePassword}
            placeholder='Mot de passe : '
            required
          />
        </label>
        <button className='login-btn' type='submit'>
          Login
        </button>
      </form>
      <Slideshow />
    </div>
  );
}

export default Login;
