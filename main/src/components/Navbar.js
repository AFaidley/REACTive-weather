import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import React from 'react';

const AppNavbar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Your Weather
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto primary'>
              <>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/weather'>
                  Weather
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
