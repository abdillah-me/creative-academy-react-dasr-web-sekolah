import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardJurusan(props) {
   return (
      <Card style={{ height: "25rem" }}>
         <Card.Img variant="top" src={props.image} style={{ objectFit: "cover", height: "60%" }} />
         <Card.Body>
            <Card.Title className="fw-bold">Card Title</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk of the card's
               content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
   );
}

export default CardJurusan;
