import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Game(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.achivements} Achievements
        </Card.Text>
        <Button variant="primary">Install</Button>
      </Card.Body>
    </Card>
  );
}

export default Game;