import React from 'react'
import { Modal } from 'react-bootstrap'
import CheckoutFormContainer from './CheckoutFormContainer'

const CheckoutComponent = ({ handleClose, showModal, handleChange, handleSubmit, userData }) => {
  
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
          <CheckoutFormContainer {...checkoutParams} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CheckoutComponent