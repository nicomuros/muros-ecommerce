import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from './Cart'



const CartContainer = () => {

  const {cartList, decreaseProductQuantity, increaseProductQuantity, deleteProduct, totalAmount, limpiarCarrito} = useContext(CartContext)

  const handleMinus = (id) => {
    return decreaseProductQuantity(id)
  }
  const handlePlus = (id) => {
    return increaseProductQuantity(id)
  }

  const handleDeleteProduct = (id) => {
    return deleteProduct(id)
  }

  const total = totalAmount();
  console.log(totalAmount())

  const handleBorrarCarrito = () => {
    return limpiarCarrito()
  }
  return (
    <Cart cartList={cartList} handleMinus={handleMinus} handlePlus={handlePlus} handleDeleteProduct={handleDeleteProduct} total={total} handleBorrarCarrito={handleBorrarCarrito}/>
  )
}

export default CartContainer