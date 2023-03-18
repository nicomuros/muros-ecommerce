import React, { useState } from 'react'
import styles from './ItemCount.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import CustomButton from '../CustomButton/CustomButton';

const ItemCount = ({stock, onAdd}) => {

  const [count, setCount] = useState(1)
  const handlePlus = () => {
    if (count < stock){
      setCount(count + 1);
    }
  }
  const handleMinus = () => {
    if (count > 1){
      setCount(count - 1);
    }
  }

  return (
    <div className={styles.number}>
      <span className={styles.minus} onClick={handleMinus}>
        <AiOutlineMinus />
      </span>
      <span className={styles.num}>{count}</span>
      <span className={styles.plus} onClick={handlePlus}>
        <AiOutlinePlus />
      </span>
      <CustomButton text="Agregar al carrito" />
    </div>
  );
};

export default ItemCount