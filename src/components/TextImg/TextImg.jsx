import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const TextImg = () => {
  return (
    <Container fluid>
        <Row m={0}>
            <Col lg={6} style={{backgroundColor: "#fbbe00"}} className="d-flex justify-content-center align-items-center">
                <Col lg={8} className="py-lg-0 py-5">
                    <h5>ACERCATE A NUESTRO LOCAL</h5>
                    <h3>AMAMOS LO QUE HACEMOS</h3>
                    <p py-lg={0}>Descubre nuestra pasión por la comida y vive una experiencia única en nuestra hamburguesería. Nuestro staff experto trabaja con ingredientes frescos y de primera para garantizar el sabor y la calidad de cada burger. ¡Te esperamos!</p>
                    <Button href="/menu" variant="dark"> <span pr={2}>Reservar una mesa</span> </Button>
                </Col>
            </Col>
            <Col lg={6} style={{backgroundColor: "#fbbe00"}} className="p-0 d-flex justify-content-center align-items-center">
                <img src="https://www.ronnie.com.ar/resources/img/index-02.jpg" className="w-100" alt=""/>
            </Col>
        </Row>
    </Container>
  )
}

export default TextImg