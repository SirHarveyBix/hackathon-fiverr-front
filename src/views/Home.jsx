import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from '../commons/CardComponent';
import dataCoworking from '../dataCoworking.json';
import './Home.css';
import { useEffect } from 'react';

function Home() {
  const [visible, setVisible] = useState(12);
  const [coworkPlaces, setCoworkPlaces] = useState([]);

  const showMoreItems = (e) => {
    e.preventDefault();
    setVisible((prevValue) => prevValue + 10);
  };

  useEffect(() => {
    setCoworkPlaces(dataCoworking);
  }, []);

  return (
    <div className="container-card">
      <div className='Card-view'>
        {coworkPlaces.slice(0, visible).map((elem) => (
          <CardComponent
            key={elem.CP}
            adresse={elem.ADRESSE}
            nom={elem.NOM}
            web={elem.WEB}
            cp={elem.CP}
            ville={elem.VILLE}
          />
        ))}
      </div>
      <Button className="btnload" onClick={showMoreItems}>Load more...</Button>
    </div>
  );
}

export default Home;
