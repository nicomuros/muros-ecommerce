import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styles from "./Cart.module.css";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const CartComponent = ( {cartItemProps, cartCheckoutProps, cartList, totalQuantity}) => {

  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>

        {totalQuantity > 0 ? (
          <>
            <Col lg={6} >
              {cartList.map((producto) => {
                return (
                  <CartItem
                    key={uuidv4()}
                    producto={producto}
                    {...cartItemProps}
                  />
                );
              })}
            </Col>

            <Col lg={4} >
              <CartSummary {...cartCheckoutProps} cartList={cartList}/>
            </Col>
          </>
        ) : (
          <Col md={4} style={{ marginTop: "100px" }}>
            <EmptyCart />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartComponent;
