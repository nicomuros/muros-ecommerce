import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { v4 as uuidv4 } from "uuid";


const CartContainer = () => {

  const {cartList} = useContext(CartContext)


  return (
    <>
      {cartList.map((producto) => {
        return(
          <div key={uuidv4()}>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio}</h3>
            <h4>{producto.cantidad}</h4>
          </div>
        )
      })}
    </>
  )
}

export default CartContainer