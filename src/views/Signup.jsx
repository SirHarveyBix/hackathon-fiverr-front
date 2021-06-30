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
              <FormInput
                label='nom'
                name='lastname'
                type='text'
                value={formContent}
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='prenom'>
              <FormInput
                label='prenom'
                name='firstname'
                type='text'
                value={formContent}
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='nom'>
              <FormInput
                label='pseudo'
                name='pseudo'
                type='text'
                value={formContent}
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='nom'>
              <FormInput
                label='email'
                name='email'
                type='email'
                value={formContent}
                setValue={setFormContent}
              />
            </label>
            <label className='field' htmlFor='nom'>
              <FormInput
                label='mot de passe'
                name='password'
                type='password'
                value={formContent}
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
