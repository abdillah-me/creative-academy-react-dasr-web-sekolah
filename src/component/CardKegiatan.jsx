import Card from "react-bootstrap/Card";

function CardKegiatan(props) {
   return (
      <>
         <Card>
            <Card.Img
               variant="top"
               src={props.image}
               style={{ height: "10rem", objectFit: "cover" }}
            />
            <Card.Body>
               <Card.Text className="fw-bold text-center">{props.description}</Card.Text>
            </Card.Body>
         </Card>
      </>
   );
}

export default CardKegiatan;
