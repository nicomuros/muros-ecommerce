import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Col lg={5} md={6}>
          <Separador categoryName="Contactanos" />
          <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
              <label htmlFor="userNameInput">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="userNameInput"
                aria-describedby="nameInput"
                placeholder="Pedro Picapiedras"
                name="userName"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="userEmailInput">Correo electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="userEmailInput"
                aria-describedby="emailHelp"
                placeholder="micorreo@gmail.com"
                name="userEmail"
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="userPhoneInput">Teléfono:</label>
              <input
                type="number"
                className="form-control"
                id="userPhoneInput"
                aria-describedby="numberInput"
                placeholder="2604..."
                name="userPhone"
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="userMessageInput">Mensaje:</label>
              <textarea
                className="form-control"
                id="userMessageInput"
                aria-describedby="messageInput"
                placeholder="Buenas tardes, me comunico con ustedes por..."
                name="userMessage"
                onChange={handleChange}
              />
            </div>

            <div className={styles.buttonContainer}>
              <CustomButton
                text="Enviar"
                type="submit"
                paddingReceived="0px 100px"
              />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoContainer;
