import { useContext, useState } from 'react';
import { Button, Col, Form, Modal, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CheckoutContainer = ( {setIsModalActive} ) => {

  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {setIsModalActive(false); setShowModal(false)};

  const { cartList, getProductTotalPrice, getCartTotalAmount } = useContext(CartContext);
  console.log(cartList);
  return (
    <>
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} className="bg-dark">
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form variant="dark">
            <Form.Group className="mb-3 row" controlId="ControlInput1">
              <Form.Label column sm="4">Nombre:</Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Ingrese su nombre..." autoFocus/>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control type="text" placeholder="2604..."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control type="text" placeholder="Alfonsina Storni x9x"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Comentarios para la entrega</Form.Label>
              <Form.Control type="text" placeholder="Alfonsina Storni x9x"/>
            </Form.Group>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${getProductTotalPrice(item.id)}</td>
                  </tr>
                ))}
              </tbody>
              <tr>
                <td colSpan="2" className="text-end fw-bold"  style={{paddingTop: 20}}>Total:</td>
                <td style={{paddingTop: 20}}>$ {getCartTotalAmount()}</td>
              </tr>
            </Table>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckoutContainer