import React, { useState } from 'react'
import styles from './ItemCount.module.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial)
  const handlePlus = () => {
    if (count < stock){
      setCount(count + 1);
    }
  }
  const handleMinus = () => {
    if (count > initial){
      setCount(count - 1);
    }
  }

  return (
    <div className={styles.number}>
      <span className={styles.minus} onClick={handleMinus}>
        <AiOutlineMinus />
      </span>
      <input className={styles.num} type="text" value={count} />
      <span className={styles.plus} onClick={handlePlus}>
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default ItemCount