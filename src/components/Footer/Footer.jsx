import React from 'react'
import { GiHamburger } from 'react-icons/gi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col className="text-center">
            <GiHamburger size={70} />
            <p className="mt-3 mb-0">San Rafael, Mendoza, Argentina</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={2} className="text-center">
            <AiOutlineTwitter size={40}/>
          </Col>
          <Col xs={2} className="text-center">
            <FaInstagram size={40} />
          </Col>
          <Col xs={2} className="text-center">
            <FaFacebook size={40} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer