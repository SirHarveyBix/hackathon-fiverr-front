import { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userId = localStorage.getItem('USERID');
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, { userId })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <div className='Container_profil'>
      <div>
        <h1>Mon profil</h1>
      </div>
      <div className='container_image_avatar'>
        <div className='texte'>
          <div>Firstname :{user[0].firstname}</div>
          <div>Lastname : {user[0].lastname}</div>
          <div>Email : {user[0].email}</div>
          <div>Pseudo : {user[0].pseudo}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
