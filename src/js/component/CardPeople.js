import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPeople() {
  const params = useParams();
    const { store, actions } = useContext(Context);
    const [person, setPerson] = useState(null);

    

{store.people?.map(person) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}/>
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          {person.gender}
          {person.hair_color}
          {person.eye_color}
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
}
}
export default CardPeople;