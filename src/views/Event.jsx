import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FormInput from './FormInput';
import './event.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import dataCoworking from '../dataCoworking.json';

function Event() {
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [formContent, setFormContent] = useState({
    user_id: 0,
    description: '',
    title: '',
    date: '',
    time: '',
  });

  const idFront = 16;
  const getData = async () => {
    const response = await fetch(dataCoworking);
    setIsLoaded(response.ok);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`).then((response) => {
      setUsers(response.data);
    });
    getData();
    setLocation(dataCoworking.find((data) => data.id === idFront));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/event`, formContent)
      .then((response) => {
        console.log(response);
        console.log(formContent);
      });
  };
  const handleChangeDescritpion = (event) => {
    setFormContent({
      description: event.target.value,
    });
  };
  const handleChangeSelect = (event) => {
    setFormContent({
      user_id: event.target.value,
    });
  };
  console.log(formContent);

  return (
    <div className='container-card-event'>
      <Card className='container-event'>
        <form onSubmit={handleSubmit}>
          <div className='inputContent'>
            <Form.Label className='titre-label'>Work with.</Form.Label>
            <select
              className='label'
              name='user_id'
              id='user_id'
              onSelect={handleChangeSelect}
            >
              <option value=''>Choose your partner</option>
              {users.map((user) => {
                return (
                  <option
                    key={user.id}
                    name='user_id'
                    value={user.id}
                    onSelect={handleChangeSelect}
                  >
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
              // value='description'
              onChange={handleChangeDescritpion}
              as='textarea'
              rows={6}
            ></FormControl>
            <div className='container-button'>
              <input type='submit' value="Creer l'evenement" />
            </div>
          </div>
        </form>
      </Card>
      {isLoaded ? (
        <Card className='container-event'>
          <form>
            <div className='map-box'>
              <MapContainer
                Marker
                center={[location.latitude, location.longitude]}
                zoom={13}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution=''
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[location.latitude, location.longitude]}>
                  <Popup>
                    <h3>{location.NOM}</h3>
                    <br />
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
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default Event;
