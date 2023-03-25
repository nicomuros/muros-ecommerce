import React from "react";
import styles from "./Cart.module.css";

const EmptyCart = () => {

  return (
    <div className={styles.emptyCartMessage}>
      <img
        src="http://cdn.onlinewebfonts.com/svg/img_456359.png"
        alt="Carrito vacío"
      />
      <h4>Tu carrito está vacío</h4>
    </div>
  );
};

export default EmptyCart;
