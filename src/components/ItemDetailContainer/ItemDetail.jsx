import styles from './ItemDetail.module.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({product, initial, onAdd, stock}) => {
  return (
    <div className={styles.container}>
      
      <Container>
        <Row>
          {product && (
            <>
            <Col lg={6}>
              <Image src={product.img} fluid className={styles.imagen}/>
            </Col>
            <Col lg={6}>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.ingredients}>{product.ingredients.join(" | ")}</p>
              <p className={styles.price}>Precio: ${product.price}</p>
              <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
            </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ItemDetail