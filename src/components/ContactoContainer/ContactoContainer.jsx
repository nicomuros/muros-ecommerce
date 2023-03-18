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

  //control de renderización del DOM
  const [anyError, setAnyError] = useState({
    userNameError: false,
    userEmailError: false,
    userPhoneError: false,
    userMessageError: false,
  });

  //control de mensaje enviado
  const [sended, setSended] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setAnyError({ ...anyError, [`${event.target.name}Error`]: false }); //limpio mensaje de error
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;
    if (userData.userName.length < 4 || userData.userName.length > 15) {
      setAnyError((prevState) => ({ ...prevState, userNameError: true }));
      error = true;
    }
    if (!userData.userEmail.includes("@gmail.com")) {
      setAnyError((prevState) => ({ ...prevState, userEmailError: true }));
      error = true;
    }
    if (userData.userPhone.length !== 10) {
      console.log("error")
      setAnyError((prevState) => ({ ...prevState, userPhoneError: true }));
      error = true;
    }
    if (!userData.userMessage || userData.userMessage.trim() === "") {
      setAnyError((prevState) => ({ ...prevState, userMessageError: true }));
      error = true;
    }
    if (!error) {
      setSended(true);
    }
  };

  console.log(anyError);
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
              {anyError.userNameError && (
                <p className={styles.errorMessage}>
                  Ingrese un nombre válido, debe contener entre 4 y 15 caracteres
                </p>
              )}
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
              {anyError.userEmailError && (
                <p className={styles.errorMessage}>
                  Ingrese un correo válido, debe contener @gmail.com
                </p>
              )}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="userPhoneInput">Teléfono:</label>
              <input
                type="text"
                className="form-control"
                id="userPhoneInput"
                aria-describedby="numberInput"
                placeholder="2604..."
                name="userPhone"
                onChange={handleChange}
              />
              {anyError.userPhoneError && (
                <p className={styles.errorMessage}>
                  Ingrese un número válido, debe contener 10 caracteres
                </p>
              )}
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
              {anyError.userMessageError && (
                <p className={styles.errorMessage}>
                  Ingrese un mensaje
                </p>
              )}
            </div>

            <div className={styles.buttonContainer}>
              <CustomButton
                text="Enviar"
                type="submit"
                paddingReceived="0px 100px"
              />
              {sended && (
                <p className={styles.successMessage}>
                  Mensaje enviado
                </p>
              )}
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoContainer;
