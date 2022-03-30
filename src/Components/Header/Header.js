import React from 'react';

import './Header.css'

import { Navbar ,Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
          <>
 

 
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
       
      Rahul's Book Shop
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;