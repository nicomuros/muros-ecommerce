import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === id);

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={productSelected.img} fluid className={styles.imagen}/>
          </Col>
          <Col lg={6}>
            <h1 className={styles.title}>{productSelected.nombre}</h1>
            <p className={styles.description}>{productSelected.descripcion}</p>
            <p className={styles.ingredients}>{productSelected.ingredientes.join(" | ")}</p>
            <p className={styles.price}>Precio: ${productSelected.precio}</p>
            <ItemCount stock={5} onAdd={onAdd} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetailContainer;