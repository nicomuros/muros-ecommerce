import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from './Cart'



const CartContainer = () => {

  const {cartList} = useContext(CartContext)


  return (
    <Cart cartList={cartList} />
  )
}

export default CartContainer