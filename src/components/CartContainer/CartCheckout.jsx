import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.css";
const CartCheckout = ({ totalQuantity, totalAmount, handleCleanCart }) => {
  console.log(totalAmount)
  return (
    <div className={styles.ticketContainer}>
      <h3>Productos: {totalQuantity}</h3>
      <h3>Envío: a determinar</h3>

      <h3>Total: ${totalAmount}</h3>
      <div className={styles.cartButtons}>
        <CustomButton text={"Pagar"} paddingReceived={"0px 10px"} />
        <div onClick={handleCleanCart}>
          <CustomButton
            text={"Borrar carrito"}
            paddingReceived={"0px 10px"}
            colorReceived={"green"}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
