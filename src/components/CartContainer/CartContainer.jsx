import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from './Cart'



const CartContainer = () => {

  const {cartList, decreaseProductQuantity, increaseProductQuantity, deleteProduct, getCartTotalAmount, limpiarCarrito, getCartTotalQuantity} = useContext(CartContext)

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

  const handleBorrarCarrito = () => {
    return limpiarCarrito()
  }

  const cartParams = {
    cartList,
    handleMinus,
    handlePlus,
    handleDeleteProduct,
    totalAmount,
    totalQuantity,
    handleBorrarCarrito
  }

  return (
    <Cart {...cartParams}/>
  )
}

export default CartContainer