import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <div className="d-flex align-items-center">
              <i className="fas fa-balance-scale fa-2x text-white me-3"></i>
              <div>
                <h1 className="mb-0">Te Apoyamos SAS</h1>
                <p className="lead mb-0 text-white-50">Asesoría Legal Profesional</p>
              </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  };

export default Header;