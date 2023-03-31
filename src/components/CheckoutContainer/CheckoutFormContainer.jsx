import React, { useContext } from 'react'
import CheckoutFormComponent from "./CheckoutFormComponent"
import { CartContext } from '../../context/CartContext';

const CheckoutFormContainer = ( {handleClose, handleSubmit, handleChange } ) => {

  const { cartList, getProductTotalPrice, getCartTotalAmount } = useContext(CartContext);

  const formParams = {
    cartList,
    getProductTotalPrice,
    getCartTotalAmount,
    handleClose,
    handleSubmit,
    handleChange
  }

  return (
    <CheckoutFormComponent {...formParams}/>
  )
}

export default CheckoutFormContainer