import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styles from "./Cart.module.css";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";

const Cart = ({
  cartList,
  handleMinus,
  handlePlus,
  handleCleanCart,
  handleDeleteProduct,
  totalAmount,
  totalQuantity,
}) => {
  const cartItemProps = {
    handleMinus,
    handlePlus,
    handleDeleteProduct,
  };

  const cartCheckoutProps = {
    totalAmount,
    totalQuantity,
    handleCleanCart,
  };

  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>
        {totalQuantity > 0 ? (
          <>
            <Col lg={6}>
              {cartList.map((producto) => {
                return (
                  <CartItem key={uuidv4()} producto={producto} {...cartItemProps}/>
                );
              })}
            </Col>
            <Col lg={4}>
              <CartCheckout {...cartCheckoutProps} />
            </Col>
          </>
        ) : (
          <Col md={4} style={{marginTop: "100px"}}>
            <h4>
              <em>El carrito está vacio</em>
            </h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
