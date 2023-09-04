import {Button, Card} from 'react-bootstrap';
const GridItems = (props) => {
return (
    <>
      <div className='col-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={props.imageFile} />
              <Card.Body>
                <Card.Title>Dragon Ball Super</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
     </div>
      </>
    );
}
export default GridItems;