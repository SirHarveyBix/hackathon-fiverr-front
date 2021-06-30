import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FormInput from './FormInput';
import './event.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function Event() {
  const [users, setUsers] = useState([]);
  const [formContent, setFormContent] = useState({
    user_id: '',
    description: '',
    title: '',
    date: '',
    time: '',
  });
  console.log(formContent);

  useEffect(() => {
    axios.get(`http://localhost:8080/user`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    axios.post(`http://localhost:8080/event`, formContent).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='container-card-event'>
      <Card className='container-event'>
        <form onSubmit={handleSubmit}>
          <div className='inputContent'>
            <Form.Label className='titre-label'>Work with.</Form.Label>
            <select className='label' name='user_id' id='user_id'>
              {users.map((user) => {
                return (
                  <option key={user.id} name='user_id' value={user.id}>
                    {user.firstname} {user.lastname}
                  </option>
                );
              })}
            </select>
            <Form.Label className='titre-label'>About</Form.Label>
            <FormInput
              label='Titre'
              name='title'
              type='text'
              value={formContent}
              setValue={setFormContent}
            />
            <Form.Label className='titre-label'>
              Motivation / Description
            </Form.Label>
            <FormControl
              label='description'
              name='description'
              type='text'
              // value={formContent}
              setValue={setFormContent}
              as='textarea'
              rows={6}
            ></FormControl>
            <div className="container-button">
              <input type='submit' value="Creer l'evenement" />
            </div>
          </div>
        </form>
      </Card>
      <Card className='container-event'>
        <form>
          <div className='map-box'>
            <MapContainer
              center={[47.2074, -1.5556]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution=''
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
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Event;
