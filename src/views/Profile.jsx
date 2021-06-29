import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <h1>Mon Profil</h1>
      </div>
      {/* <div className='container_image_avatar'>
        <div className='texte'>
          <div>Firstname :{user[0].firstname}</div>
          <div>Lastname : {user[0].lastname}</div>
          <div>Email : {user[0].email}</div>
          <div>Pseudo : {user[0].pseudo}</div>
        </div>
        {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
        {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> 
        </div>*/} 
    </div>
  );
}

export default Profile;
