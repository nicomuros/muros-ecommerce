import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.css"
import CartProductButtons from "./CartProductButtons";

const Cart = ({cartList}) => {

  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>
        <Col lg={6}>
          {
            cartList.map((producto) => {
              return (<div key={uuidv4()} className={styles.productContainer}>
                <div className={styles.productInfoContainer}>
                  <div className={styles.productImgContainer}>
                    <img src={producto.img} alt="product-img" className={styles.productImg}/>
                  </div>
                  <div className={styles.productText}>
                    <h5>{producto.nombre}</h5>
                    <h6>$ {producto.precio}</h6>
                  </div>
                </div>
                <div class={styles.productButtons}>
                  <CartProductButtons producto={producto} />
                </div>
              </div>
              )
            })
          }
        </Col>
        <Col lg={4}>
          <div className={styles.ticketContainer}>
            <h3>Productos: 4</h3>
            <h3>Envío: a determinar</h3>

            <h3>Total: $123</h3>
            <div className={styles.cartButtons}>
              <CustomButton text={"Pagar"} paddingReceived={"0px 10px"} />
              <CustomButton text={"Borrar carrito"} paddingReceived={"0px 10px"} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
