import React from "react";
import styles from "./Cart.module.css"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CustomButton from "../CustomButton/CustomButton";

const CartItem = ({producto, handleMinus, handlePlus, handleDeleteProduct}) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productInfoContainer}>
        <div className={styles.productImgContainer}>
          <img
            src={producto.img}
            alt="product-img"
            className={styles.productImg}
          />
        </div>
        <div className={styles.productText}>
          <h5>{producto.name}</h5>
          <h6>$ {producto.price}</h6>
        </div>
      </div>
      <div className={styles.productButtons}>
        <div className={styles.productButtons}>
          <div className={styles.productCounter}>
            <span
              className={styles.minus}
              onClick={() => {
                handleMinus(producto.id);
              }}
            >
              <AiOutlineMinus />
            </span>
            <span className={styles.num}>{producto.quantity}</span>
            <span
              className={styles.plus}
              onClick={() => {
                handlePlus(producto.id);
              }}
            >
              <AiOutlinePlus />
            </span>
          </div>
          <div
            onClick={() => {
              handleDeleteProduct(producto.id);
            }}
          >
            <CustomButton text="Eliminar" paddingReceived="0px 20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
