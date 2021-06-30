/* eslint-disable no-unused-vars */
import axios from 'axios';
import Slideshow from '../commons/Slideshow';
import React, { useState, useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import { Card } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLog } = useContext(LoginContext);

  const handlePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
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
    <div className='loginForm'>
      <Card className="card-login">
        <Card.Body className="card-body-login">
          <form onSubmit={handleSubmit}>
            <label className='field' htmlFor='pseudo'>
              <input
                id='pseudo'
                type='pseudo'
                name='pseudo'
                onChange={handlePseudo}
                placeholder='Pseudo...'
                required
              />
            </label>
            <label className='field' htmlFor='password'>
              <input
                id='password'
                type='password'
                name='password'
                onChange={handlePassword}
                placeholder='Password...'
                required
              />
            </label>
            <button className='login-btn' type='submit' onClick={() => setIsLog(true)}>
              Login
            </button>
          </form>
        </Card.Body>
      </Card>
      <Slideshow />
    </div>
  );
}

export default Login;
