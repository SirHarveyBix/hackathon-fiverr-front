import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [isLog, setIsLog] = useState({});

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
        setIsLog(response);
      });
  };
  console.log(isLog);

  return (
    <div className='signUpForm'>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Login</button>
        {isLog ? console.log(isLog) : console.log(isLog)}
      </form>
    </div>
  );
}

export default Login;
