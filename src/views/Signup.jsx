/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import FormInput from './FormInput';
import { Card } from 'react-bootstrap';
import './Signup.css';

function SignUp() {
  const [formContent, setFormContent] = useState({
    lastname: '',
    firstname: '',
    pseudo: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/signup`, formContent).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='signUpForm'>
      <Card className="card-signup">
        <Card.Body className="card-body-signup">
          <form onSubmit={handleSubmit}>
            <label className='field' htmlFor='nom'>
              <input
                label='nom'
                name='lastname'
                type='text'
                placeholder='Lastname...'
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='prenom'>
              <input
                label='prenom'
                name='firstname'
                type='text'
                placeholder='firstname...'
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='pseudo'>
              <input
                label='pseudo'
                name='pseudo'
                type='text'
                placeholder='Pseudo...'
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='email'>
              <input
                label='email'
                name='email'
                type='email'
                placeholder='Email...'
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='password'>
              <input
                label='mot de passe'
                name='password'
                type='password'
                placeholder='Password...'
                setValue={setFormContent}
              />
            </label>
            <input
              className='login-btn'
              type='submit'
              value='Creer mon compte'
            />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
