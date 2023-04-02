import React from "react";
import CheckoutContainer from "../CheckoutContainer/CheckoutContainer";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.css";

const CartSummary = ({ 
  totalQuantity, 
  totalAmount, 
  handleCleanCart, 
  handleConfirmOrder, 
  isModalActive,
  setIsModalActive
}) => {
  
  return (
    <div className={styles.ticketContainer}>

      <h3>Productos: {totalQuantity}</h3>
      <h3>Envío: <em style={{fontWeight: 400, fontSize: 25}}>Take away...</em></h3>
      <h3>Subtotal: ${totalAmount}</h3>

      <div className={styles.cartButtons} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>

        <div onClick={handleConfirmOrder}>
          <CustomButton text={"Finalizar compra"} paddingReceived={"0px 15px"} width={"200px"}/>
        </div>

        <div onClick={handleCleanCart}>
          <CustomButton
            text={"Borrar carrito"}
            paddingReceived={"0px 15px"}
            colorReceived={"green"}
            width={"200px"}
          />
        </div>
      </div>

      {
        isModalActive && <CheckoutContainer setIsModalActive={setIsModalActive}/>
      }

    </div>
  );
};

export default CartSummary;