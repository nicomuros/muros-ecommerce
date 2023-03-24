import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from './Cart'



const CartContainer = () => {

  const {cartList, decreaseProductQuantity, increaseProductQuantity, deleteProduct, getCartTotalAmount, cleanCart, getCartTotalQuantity} = useContext(CartContext)

  const handleMinus = (id) => {
    return decreaseProductQuantity(id)
  }
  const handlePlus = (id) => {
    return increaseProductQuantity(id)
  }

  const handleDeleteProduct = (id) => {
    return deleteProduct(id)
  }

  const totalAmount = getCartTotalAmount();
  
  const totalQuantity = getCartTotalQuantity();

  const handleCleanCart = () => {
    return cleanCart()
  }

 

  const cartParams = {
    cartList,
    handleMinus,
    handlePlus,
    handleDeleteProduct,
    totalAmount,
    totalQuantity,
    handleCleanCart
  }

  return (
    <Cart {...cartParams}/>
  )
}

export default CartContainer