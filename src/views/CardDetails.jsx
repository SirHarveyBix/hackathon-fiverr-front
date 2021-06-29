import React, { useContext } from 'react';
import CardDetailsContext from '../contexts/CardDetailsContext';

function CardDetails() {

  const { cardDetails } = useContext(CardDetailsContext);
  console.log(cardDetails);

  return (
    <div>
      <p>{cardDetails.nom}</p>
      <p>{cardDetails.adresse}</p>
    </div>
  )
}

export default CardDetails
