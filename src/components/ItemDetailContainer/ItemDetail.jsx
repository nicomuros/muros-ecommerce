import React, { useContext } from 'react'
import styles from './ItemDetail.module.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {

  const {addToCart, getProductQuantity} = useContext(CartContext)

  const initial = producto && getProductQuantity(producto.id)
  
  const onAdd = (quantity) => {
    const productWithQuantity = {
      ...producto,
      cantidad: quantity
    }
    addToCart(productWithQuantity)
  };
  return (
    <div className={styles.container}>
      
      <Container>
        <Row>
          {producto && (
            <>
            <Col lg={6}>
              <Image src={producto.img} fluid className={styles.imagen}/>
            </Col>
            <Col lg={6}>
              <h1 className={styles.title}>{producto.nombre}</h1>
              <p className={styles.description}>{producto.descripcion}</p>
              <p className={styles.ingredients}>{producto.ingredientes.join(" | ")}</p>
              <p className={styles.price}>Precio: ${producto.precio}</p>
              <ItemCount stock={5} initial={initial} onAdd={onAdd} />
            </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ItemDetail