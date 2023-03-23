import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.css";

const Cart = ({ cartList, handleMinus, handlePlus, handleDeleteProduct, total, handleBorrarCarrito }) => {
  return (
    <Container fluid className={styles.container}>
      <Row className={`d-flex justify-content-center`}>
        {cartList.length > 0 ?
          <>
          <Col lg={6}>
            {cartList.map((producto) => {
              return (
                <div key={uuidv4()} className={styles.productContainer}>
                  <div className={styles.productInfoContainer}>
                    <div className={styles.productImgContainer}>
                      <img
                        src={producto.img}
                        alt="product-img"
                        className={styles.productImg}
                      />
                    </div>
                    <div className={styles.productText}>
                      <h5>{producto.nombre}</h5>
                      <h6>$ {producto.precio}</h6>
                    </div>
                  </div>
                  <div className={styles.productButtons}>
                    <div className={styles.productButtons}>
                      <div className={styles.productCounter}>
                        <span className={styles.minus} onClick={() => {handleMinus(producto.id)}}>
                          <AiOutlineMinus />
                        </span>
                        <span className={styles.num}>{producto.cantidad}</span>
                        <span className={styles.plus} onClick={() => {handlePlus(producto.id)}}>
                          <AiOutlinePlus />
                        </span>
                      </div>
                      <div onClick={() => {handleDeleteProduct(producto.id)}}>
                        <CustomButton text="Eliminar" paddingReceived="0px 20px" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col lg={4}>
            
            <div className={styles.ticketContainer}>
              <h3>Productos: 4</h3>
              <h3>Envío: a determinar</h3>

              <h3>Total: ${total}</h3>
              <div className={styles.cartButtons}>
                <CustomButton text={"Pagar"} paddingReceived={"0px 10px"} />
                <div onClick={handleBorrarCarrito}>
                  <CustomButton
                    text={"Borrar carrito"}
                    paddingReceived={"0px 10px"}
                  />
                </div>
              </div>
            </div>
            
          </Col>
          </>
        : 
            <Col>
              <h3>El carrito está vacio</h3>
            </Col>
        }
      </Row>
    </Container>
  );
};

export default Cart;
