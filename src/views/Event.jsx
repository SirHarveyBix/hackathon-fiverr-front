import axios from 'axios';
import React, { useState } from 'react';
import FormInput from './FormInput';
import './Event.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import map from '../img/map.png';

function Event() {
  const [formContent, setFormContent] = useState({
    user_id: '',
    description: '',
    title: '',
    date: '',
    time: '',
  });
  console.log(formContent);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                <option>Michel</option>
                <option>Damien</option>
                <option>Tacos</option>
                <option>Guigui</option>
                <option>Bastien</option>
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
            <img alt="" src={map} />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Event;