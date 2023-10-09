import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPeople() {
    const { store, actions } = useContext(Context);

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