import React, { useContext } from 'react'
import CheckoutFormComponent from "./CheckoutFormComponent"
import { CartContext } from '../../context/CartContext';
import { useFormik } from "formik";
import * as Yup from 'yup';

const CheckoutFormContainer = ( {handleClose, checkoutData, setCheckoutData, setIsSubmitted} ) => {

  const { cartList, getProductTotalPrice, getCartTotalAmount } = useContext(CartContext);

  
  const formik = useFormik({
    initialValues: {
      userName: "",
      userLastName: "",
      userPhone: "",
      userEmail: "",
      userConfirmEmail: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
      .min(3, 'Debe tener más de 3 caracteres')
      .max(15, 'Debe tener menos de 15 caracteres')
      .required('Campo obligatorio'),
      userLastName: Yup.string()
      .min(3, 'Debe tener más de 3 caracteres')
      .max(15, 'Debe tener menos de 15 caracteres')
      .required('Campo obligatorio'),
      userPhone: Yup.string()
      .matches(/^(?!(?:11|15)\d{8})(?:\d{2})?\d{8}$/, 'Debe ingresar un número de teléfono válido en Argentina (sin 0 ni 15)')
      .required('Campo obligatorio'),
      userEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio'),
      userConfirmEmail: Yup.string().email('Debe ingresar un email válido').required('Campo obligatorio').oneOf([Yup.ref('userEmail'), null], 'Los emails no coinciden'),
    }),
    onSubmit: (values) => {
      //const orderWithDate = { ...checkoutData, date: new Date() };
      setCheckoutData({ 
        ...checkoutData, 
        buyer: {
          userName: values.userName,
          userLastName: values.userLastName,
          userPhone: values.userPhone,
          userEmail: values.userEmail
        },
        date: new Date(),
      });
      setIsSubmitted(true);
    },
  });

  const formParams = {
    cartList,
    getProductTotalPrice,
    getCartTotalAmount,
    formik,
    handleClose
  }

  return (
    <CheckoutFormComponent {...formParams}/>
  )
}

export default CheckoutFormContainer