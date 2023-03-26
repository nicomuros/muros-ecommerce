import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.css";
const CartCheckout = ({ totalQuantity, totalAmount, handleCleanCart }) => {
  console.log(totalAmount)
  return (
    <div className={styles.ticketContainer}>
      <h3>Productos: {totalQuantity}</h3>
      <h3>Envío: <em style={{fontWeight: 400, fontSize: 25}}>A determinar...</em></h3>

      <h3>Subtotal: ${totalAmount}</h3>
      <div className={styles.cartButtons}>
        <CustomButton text={"Finalizar compra"} paddingReceived={"0px 15px"} />
        <div onClick={handleCleanCart}>
          <CustomButton
            text={"Borrar carrito"}
            paddingReceived={"0px 15px"}
            colorReceived={"green"}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
