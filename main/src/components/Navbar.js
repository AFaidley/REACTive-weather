import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import React from 'react';

const AppNavbar = () => {
  return (
    <div>
      <Navbar bg='info' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Your Weather
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/weather'>
                  Weather
                </Nav.Link>
                <Nav.Link as={Link} to='/5day'>
                  5 Day Forecast
                </Nav.Link>
                <Nav.Link as={Link} to='/10day'>
                  10 Day Forecast
                </Nav.Link>
                <Nav.Link as={Link} to='/airquality'>
                  Air Quality
                </Nav.Link>
                <Nav.Link as={Link} to='/radar'>
                  Radar
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
