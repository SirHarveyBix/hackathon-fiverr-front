import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataImages from '../dataImages.json';
import marker from '../img/marker.png';
import { useHistory } from 'react-router';
import CardDetailsContext from '../contexts/CardDetailsContext';

function CardComponent(props) {
  const { nom, web, cp, ville } = props;
  const { setCardDetails } = useContext(CardDetailsContext);

  const aleatory = dataImages[Math.floor(Math.random() * 9)];

  let history = useHistory();

  function handleClick() {
    history.push('/carddetails');
    setCardDetails(props);
  };

  return (
    <div className='Card'>
      <div>
        <Card
          style={{
            width: '14rem',
            height: '250px',
            margin: '3px',
            cursor: 'pointer',
          }}
        >
          <Card.Img
            variant='top'
            src={aleatory.URL}
            style={{ width: 'auto', height: '7rem' }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: '16px' }}>{nom}</Card.Title>
            <Card.Text style={{ fontSize: '12px' }}>
              <img
                style={{ width: '11px', height: '11px', marginRight: '3px' }}
                alt=''
                src={marker}
              />
              {ville}, {cp}
            </Card.Text>
            <Card.Text style={{ fontSize: '11px' }}>{web}</Card.Text>
          </Card.Body>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              style={{
                width: '90px',
                height: '20px',
                fontSize: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '5px',
              }}
              onClick={handleClick}
            >
              Get details
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
