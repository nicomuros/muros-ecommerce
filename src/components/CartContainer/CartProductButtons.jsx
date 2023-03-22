import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./CartProductButtons.module.css";

const CartProductButtons = ({producto}) => {
  return (
    <div className={styles.productButtons}>
      <div className={styles.productCounter}>
        <span className={styles.minus}>
          <AiOutlineMinus />
        </span>
        <span className={styles.num}>{producto.cantidad}</span>
        <span className={styles.plus}>
          <AiOutlinePlus />
        </span>
      </div>
      <CustomButton text="Eliminar" paddingReceived="0px 20px" />
    </div>
  );
};

export default CartProductButtons;
