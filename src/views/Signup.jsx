/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import FormInput from './FormInput';

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
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='nom'
          name='lastname'
          type='text'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='prenom'
          name='firstname'
          type='text'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='pseudo'
          name='pseudo'
          type='text'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='email'
          name='email'
          type='email'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='mot de passe'
          name='password'
          type='password'
          value={formContent}
          setValue={setFormContent}
        />
        <input type='submit' value="Creer mon compte" />
      </form>
    </div>
  );
}

export default SignUp;
