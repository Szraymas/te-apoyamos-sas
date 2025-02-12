import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <div className="mx-auto text-white">
        © {new Date().getFullYear()} Te Apoyamos SAS - Felipe Suárez Másmela
      </div>
    </Navbar>
  );
};

export default Footer;