import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import CartComponent from './CartComponent'
import { useState } from "react";


const CartContainer = () => {

  const {
    cartList,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProduct,
    getCartTotalAmount,
    cleanCart,
    getCartTotalQuantity
  } = useContext(CartContext)

  const [isModalActive, setIsModalActive] = useState(false);

  const totalAmount = getCartTotalAmount();
  const totalQuantity = getCartTotalQuantity();

  const handleMinus = (id) => {
    return decreaseProductQuantity(id)
  }
  const handlePlus = (id) => {
    return increaseProductQuantity(id)
  }

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Estas seguro que deseas eliminar el producto del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Se eliminó correctamente el producto del carrito',
        )
        return deleteProduct(id)
      }
    })
  }


  const handleCleanCart = () => {
    Swal.fire({
      title: 'Estas seguro que deseas limpiar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Se limpió correctamente todo el carrito',
        )
        return cleanCart()
      }
    })
  }

  const handleConfirmOrder = () => {
    setIsModalActive(true);
  }

  const cartItemProps = {
    handleMinus,
    handlePlus,
    handleDeleteProduct,
  };

  const cartCheckoutProps = {
    totalAmount,
    totalQuantity,
    handleCleanCart,
    handleConfirmOrder,
    isModalActive,
    setIsModalActive
  };

  return (
    <CartComponent cartItemProps = {cartItemProps} cartCheckoutProps = {cartCheckoutProps} totalQuantity = {totalQuantity} cartList = {cartList}/>
  )
}

export default CartContainer