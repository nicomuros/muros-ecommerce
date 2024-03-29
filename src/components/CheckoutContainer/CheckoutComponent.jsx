import React from 'react'
import { Modal } from 'react-bootstrap'
import CheckoutFormContainer from './CheckoutFormContainer'
import ProcessCheckoutContainer from "./ProcessCheckoutContainer"
const CheckoutComponent = ({ handleClose, showModal, areDataReady, checkoutData, setCheckoutData, setIsSubmitted }) => {
  
  const checkoutFormParams = {
    handleClose,
    setCheckoutData,
    setIsSubmitted,
    checkoutData
  }
  
  return (
    <>
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            areDataReady ? (
                <ProcessCheckoutContainer checkoutData={checkoutData} />
              ) : (
                <CheckoutFormContainer {...checkoutFormParams} />
            )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CheckoutComponent