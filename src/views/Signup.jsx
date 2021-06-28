/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import avatar from '../../media/avatar.png';
import './SignUp.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function SignUpKine() {
  const classes = useStyles();
  const [formContent, setFormContent] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = {};
    for (let i = 0; i < event.target.length; i += 1) {
      content[event.target[i].name] = event.target[i].value;
    }
    setFormContent(content);
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
          formContent,
          setFormContent,
        })
        .then((response) => {
          console.log(response);
        });
    }
  };

  return (
    <div className='container-form'>
      <div>
        <div className='signUpForm'>
          <form onSubmit={handleSubmit}>
            <div className='container-avatar'>
              <img className='avatar' src={avatar} alt='avatar' />
            </div>
            <TextField
              htmlFor='lastname'
              label='Nom'
              id='lastname'
              defaultValue=''
              className={classes.textField}
              margin='dense'
              variant='outlined'
              name='lastname'
              required
            />
            <TextField
              htmlFor='firstname'
              label='Prénom'
              id='firstname'
              defaultValue=''
              className={classes.textField}
              margin='dense'
              variant='outlined'
              name='firstname'
              required
            />
            <TextField
              htmlFor='pseudo'
              id='pseudo'
              defaultValue=''
              className={classes.textField}
              margin='dense'
              variant='outlined'
              name='pseudo'
              type='text'
              required
            />
            <TextField
              htmlFor='email'
              label='Email'
              id='email'
              defaultValue=''
              className={classes.textField}
              margin='dense'
              variant='outlined'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              htmlFor='password'
              label='Mot de passe'
              id='password'
              defaultValue=''
              className={classes.textField}
              margin='dense'
              variant='outlined'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='button-signup' type='submit'>
              Créer mon compte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
