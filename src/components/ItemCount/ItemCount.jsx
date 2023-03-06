import React, { useState } from 'react'
import styles from './ItemCount.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

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
      <button className={styles.buttn} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount