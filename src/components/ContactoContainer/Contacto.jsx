import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Contacto.module.css";
import Separador from "../Separador/Separador";

const Contacto = ({ handleChange, handleSubmit, errorList, isSended }) => {
  return (
    <Container fluid className={styles.container}>
      <Row className="d-flex justify-content-center">
        <Col lg={5} md={6}>
          <Separador title="Contactanos" />
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
              {errorList.userNameError && (
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
              {errorList.userEmailError && (
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
              {errorList.userPhoneError && (
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
              {errorList.userMessageError && (
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
              {isSended && (
                <p className={styles.successMessage}>
                  Mensaje enviado
                </p>
              )}
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacto