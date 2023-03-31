import React from "react";
import { Button, Col, Form, Table } from "react-bootstrap";

const CheckoutForm = ({
  cartList,
  getCartTotalAmount,
  getProductTotalPrice,
  handleClose,
  handleSubmit,
  handleChange,
}) => {
  return (
    <Form variant="dark" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 row" controlId="ControlInput1">
        <Form.Label column sm="2">
          Nombre:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre..."
            autoFocus
            onChange={handleChange}
            name="userName"
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3 row" controlId="ControlInput2">
        <Form.Label column sm="2">
          Teléfono:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="2604..."
            onChange={handleChange}
            name="userPhone"
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3 row" controlId="ControlInput3">
        <Form.Label column sm="2">
          Correo:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            placeholder="tucorreo@gmail.com"
            onChange={handleChange}
            name="userEmail"
          />
        </Col>
      </Form.Group>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${getProductTotalPrice(item.id)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="3"
              className="text-end fw-bold"
              style={{ paddingTop: 20 }}
            >
              Total:
            </td>
            <td style={{ paddingTop: 20 }}>$ {getCartTotalAmount()}</td>
          </tr>
        </tfoot>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit" style={{ marginLeft: 10 }}>
          Comprar
        </Button>
      </div>
    </Form>
  );
};

export default CheckoutForm;
