import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';

function Event() {
  const [users, setUsers] = useState([]);
  const [formContent, setFormContent] = useState({
    user_id: '',
    description: '',
    title: '',
    date: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/user`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/event`, formContent).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div>Create event</div>
      <form onSubmit={handleSubmit}>
        <select name='user_id' id='user_id'>
          {users.map((user) => {
            return (
              <option key={user.id} name='user_id' value={user.id}>
                {user.firstname} {user.lastname}
              </option>
            );
          })}
        </select>
        <FormInput
          label='Titre'
          name='title'
          type='text'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='description'
          name='description'
          type='text'
          value={formContent}
          setValue={setFormContent}
        />
        <FormInput
          label='date'
          name='date'
          type='date'
          value={formContent}
          setValue={setFormContent}
        />
        <input type='submit' value="Creer l'evenement" />
      </form>
    </div>
  );
}

export default Event;
