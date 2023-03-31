import React from 'react'
import { Modal } from 'react-bootstrap'
import CheckoutFormContainer from './CheckoutFormContainer'
import CheckoutComplete from "./CheckoutComplete"
const CheckoutComponent = ({ handleClose, showModal, handleChange, handleSubmit, isSubmitted }) => {
  
  const checkoutParams = {
    handleClose,
    handleSubmit,
    handleChange
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            isSubmitted ? (
                <CheckoutComplete />
              ) : (
                <CheckoutFormContainer {...checkoutParams} />
            )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CheckoutComponent