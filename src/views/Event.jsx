import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FormInput from './FormInput';
import './event.css';

function Event() {
  const [users, setUsers] = useState([]);
  const [formContent, setFormContent] = useState({
    user_id: '',
    description: '',
    title: '',
    date: '',
    time: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/event`, formContent)
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputContent'>
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
        </div>
        <div className='map-box'>
          <MapContainer
            center={[47.2074, -1.5556]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[47.2074, -1.5556]}>
              <Popup>
                Reserve a desk :<br />{' '}
                <FormInput
                  label='date '
                  name='date'
                  type='date'
                  value={formContent}
                  setValue={setFormContent}
                />
                <FormInput
                  label='time '
                  name='time'
                  type='time'
                  value={formContent}
                  setValue={setFormContent}
                />
              </Popup>
            </Marker>
          </MapContainer>
          <input type='submit' value="Creer l'evenement" />
        </div>
      </form>
    </div>
  );
}

export default Event;
