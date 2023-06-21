import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img className='nav-img' src='https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/cee2e87d-011f-4c2f-9d51-3b3dd171042c/design-previews/4cdcb617-9635-49e3-8eb9-390fca4052a4/1687302919360-thumbnail.jpeg'/></Navbar.Brand>
          <Nav className="">
            <Nav.Link className='rightie' href="#home">Home</Nav.Link>
            <Nav.Link href="#wishlist">Wishlist</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Button style={{color: "#0099cc"}} className='' variant="black">Login</Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
   </>
  );
}
export default CustomNavbar;