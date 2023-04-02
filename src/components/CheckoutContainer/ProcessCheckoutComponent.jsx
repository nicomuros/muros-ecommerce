import React from 'react'
import { v4 as uuidv4 } from "uuid";

const ProcessCheckoutComponent = ({ isOrderBeingSent, orderInHost }) => {
  return (
    isOrderBeingSent ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) :  (
      <div className="d-flex justify-content-center">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">¡Gracias por tu compra!</h4>
          <p>
            Este mensaje contiene los datos cargados en nuestros servidores.
          </p>
          <p>
          Tu compra ha sido procesada y en breve recibirás un correo con los
            detalles y la hora estimada para que puedas retirar
            el producto. 
            
            ¡Muchas gracias!
          </p>
          <hr />

          {orderInHost && (
            <>
              <p className="mb-0 text-center">
                <strong>Detalles</strong>
              </p>
              <hr />
              <p>
                <strong>ID de la orden:</strong> {orderInHost.orderId}
              </p>
              <p>
                <strong>Nombre:</strong> {orderInHost.buyer.userName}
              </p>
              <p>
                <strong>Teléfono:</strong> {orderInHost.buyer.userPhone}
              </p>
              <p>
                <strong>Correo:</strong> {orderInHost.buyer.userEmail}
              </p>
              <p>
                <strong>Productos:</strong>
              </p>
              <ul>
                {orderInHost.items.map((product) => (
                  <li key={uuidv4()}>
                    {product.name} - ${product.price} - {product.quantity} unidades
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> ${orderInHost.total}
              </p>
            </>
          )}
        </div>
      </div>
    )
  )
}

export default ProcessCheckoutComponent