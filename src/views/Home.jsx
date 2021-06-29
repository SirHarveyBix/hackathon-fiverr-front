import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from '../commons/CardComponent';
import dataCoworking from '../dataCoworking.json';
import dataCity from '../dataCity.json';
import './Home.css';

function Home() {
  const [visible, setVisible] = useState(12);
  const [coworkPlaces, setCoworkPlaces] = useState([]);
  const [valueSelect, setValueSelect] = useState('');

  const showMoreItems = (e) => {
    e.preventDefault();
    setVisible((prevValue) => prevValue + 12);
  };

  useEffect(() => {
    setCoworkPlaces(dataCoworking);
  }, [coworkPlaces]);

  function toggle(e) {
    setValueSelect(e.target.value);
  }

  return (
    <div className='home-view'>
      <div className='filtering'>
        <h1
          style={{
            fontSize: '80px',
            color: '#eee',
            fontWeigth: '900',
            marginTop: '50px',
          }}
        >
          Find a place...
        </h1>
        <Form>
          <Form.Group controlId='select' className='select-city'>
            <Form.Control as='select' onChange={toggle}>
              Select a city...
              {dataCity.map((elem) => (
                <option>{elem}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className='container-card'>
        <div className='Card-view'>
          {valueSelect === ''
            ? coworkPlaces
                .slice(0, visible)
                .map((elem) => (
                  <CardComponent
                    key={elem.id}
                    adresse={elem.ADRESSE}
                    nom={elem.NOM}
                    web={elem.WEB}
                    cp={elem.CP}
                    ville={elem.VILLE}
                    img={elem.IMG.URL}
                  />
                ))
            : coworkPlaces
                .filter((el) => el.VILLE === valueSelect)
                .slice(0, visible)
                .map((elem) => (
                  <CardComponent
                    key={elem.id}
                    adresse={elem.ADRESSE}
                    nom={elem.NOM}
                    web={elem.WEB}
                    cp={elem.CP}
                    ville={elem.VILLE}
                    img={elem.IMG.URL}
                  />
                ))}
        </div>
        <Button className='btnload' onClick={showMoreItems}>
          Load more...
        </Button>
      </div>
    </div>
  );
}

export default Home;
