import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Contacto.module.css";
import Separador from "../Titulador/Titulador";

const ContactoComponent = ({ formik }) => {
  return (
    <Container fluid className={styles.container}>
      <Row className="d-flex justify-content-center">
        <Col lg={5} md={6}>
          <Separador title="Contactanos" />
          <Form variant="dark" onSubmit={formik.handleSubmit}>
            <Row>
              <Col sm={6}>
              <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3" >
                  <Form.Control 
                    type="text" 
                    placeholder="Nombre" 
                    name="userName" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    isInvalid={formik.touched.userName && formik.errors.userName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.userName}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col sm={6}>
                <FloatingLabel controlId="floatingInput" label="Apellido" className="mb-3" >
                  <Form.Control 
                    type="text"
                    placeholder="Apellido" 
                    name="userLastName" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userLastName}
                    isInvalid={formik.touched.userLastName && formik.errors.userLastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.userLastName}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel controlId="floatingInput" label="Teléfono" className="mb-3" >
              <Form.Control 
                type="text" 
                placeholder="Teléfono" 
                name="userPhone" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userPhone}
                isInvalid={formik.touched.userPhone && formik.errors.userPhone}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userPhone}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
              <Form.Control 
                type="text" 
                placeholder="Email" 
                name="userEmail" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userEmail}
                isInvalid={formik.touched.userEmail && formik.errors.userEmail}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userEmail}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Confirmar Email" className="mb-3" >
              <Form.Control 
                type="text" 
                placeholder="Confirmar Email"
                name="userConfirmEmail" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userConfirmEmail}
                isInvalid={formik.touched.userConfirmEmail && formik.errors.userConfirmEmail}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userConfirmEmail}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Mensaje" className="mb-3" >
              <Form.Control 
                as="textarea" 
                placeholder="Mensaje"
                name="userMessage" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userMessage}
                isInvalid={formik.touched.userMessage && formik.errors.userMessage}
                style={{height: '100px'}}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.userMessage}
              </Form.Control.Feedback>
            </FloatingLabel>
            <CustomButton type="submit" variant="dark" className="mt-3" text="Enviar" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoComponent;
