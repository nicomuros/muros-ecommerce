import React, { useContext } from 'react'
import Swal from 'sweetalert2'
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

  const totalAmount = getCartTotalAmount();
  
  const totalQuantity = getCartTotalQuantity();

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