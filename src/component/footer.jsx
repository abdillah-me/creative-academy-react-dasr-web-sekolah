import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
   return (
      <Navbar bg="dark" varian="dark">
         <Container>
            <Navbar.Brand href="#home" className="text-white fw-bold">
               SMKN 04 ANAMBAS
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
               <Navbar.Text className="text-white">
                  Belajar React | Bootstrap :{" "}
                  <a href="#login" className="text-white">
                     2022
                  </a>
               </Navbar.Text>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Footer;
