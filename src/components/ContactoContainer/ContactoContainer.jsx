import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ContactoContainer.module.css";
import Separador from "../Separador/Separador";
const ContactoContainer = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const customStyles = {
    backgroundColor: "rgb(251, 190, 0)",
    border: "2px solid rgba(111, 111, 111, 0.15)"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.userName.length < 4 || userData.userName.length > 15)
      console.log("Largo de nombre invalido");
    else if (!userData.userEmail.includes("@gmail.com"))
      console.log("correo inválido");
    else if (userData.userPhone.lenght > 10)
      console.log("largo del telefono invalido");
    else if (userData.userMessage === "") console.log("no escribió el mensaje");
    else console.log("mensaje enviado");
  };
  return (
    <Container fluid className={styles.container}>
      <Row className="d-flex justify-content-center">
        <Col lg={5}>
          <Separador categoryName="Contactanos" />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label className={styles.label}>Ingresa tu nombre:</Form.Label>
              <Form.Control className={styles.customInput} onChange={handleChange} type="text" placeholder="Pedro Picapiedra... " name="userName" style={customStyles}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label className={styles.label}>Ingresa tu correo:</Form.Label>
              <Form.Control className={styles.customInput} onChange={handleChange} type="email" placeholder="pPicapiedra@gmail.com " name="userEmail" style={customStyles}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label className={styles.label}>Ingresa tu numero de telefono:</Form.Label>
              <Form.Control oclassName={styles.customInput} onChange={handleChange} type="number" placeholder="2604515253" name="userPhone" style={customStyles}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label className={styles.label}>¿En que podemos ayudarte?</Form.Label>
              <Form.Control className={styles.customInput} onChange={handleChange} as="textarea" placeholder="Necesito contrar los servicios para..." name="userMessage" style={customStyles}/>
            </Form.Group>
            <div className={styles.buttonContainer}>
              <CustomButton text="Enviar" type="submit" paddingReceived="0px 100px"/>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoContainer;
