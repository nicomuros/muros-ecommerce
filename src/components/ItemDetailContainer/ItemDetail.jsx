import styles from './ItemDetail.module.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({producto, initial, onAdd}) => {
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
              <h1 className={styles.title}>{producto.name}</h1>
              <p className={styles.description}>{producto.description}</p>
              <p className={styles.ingredients}>{producto.ingredients.join(" | ")}</p>
              <p className={styles.price}>Precio: ${producto.price}</p>
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