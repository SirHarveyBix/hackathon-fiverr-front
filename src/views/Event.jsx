import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FormInput from './FormInput';
import './event.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
        <Card.Body>
          <Form.Group
            controlId='exampleForm.ControlSelect2'
            onSubmit={handleSubmit}
          >
            <Form.Label className='titre-label'>Work with.</Form.Label>
            <div className='inputContent'>
              <Form.Control as='select' name='user_id' id='user_id'>
                {users.map((user) => {
                  return (
                    <option key={user.id} name='user_id' value={user.id}>
                      {user.firstname} {user.lastname}
                    </option>
                  );
                })}
              </Form.Control>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label className='titre-label'>About</Form.Label>
                <Form.Label
                  label='Titre'
                  name='title'
                  type='text'
                  value={formContent}
                  setValue={setFormContent}
                ></Form.Label>
                <Form.Control type='text' placeholder='Projet x' />
              </Form.Group>

              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label className='titre-label'>
                  Motivation / Description
                </Form.Label>
                <Form.Label
                  label='description'
                  name='description'
                  type='text'
                  value={formContent}
                  setValue={setFormContent}
                ></Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button type='submit' variant='outline-success'>Créer l'évenement</Button>
            </div>
          </Form.Group>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Form.Group>
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
              <input type='submit' value="Creer l'evenement" />
            </div>
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Event;
