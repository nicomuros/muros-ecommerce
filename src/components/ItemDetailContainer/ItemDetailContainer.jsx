import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();
  
  useEffect(() => {
    const promise = new Promise((res) => {
      const item = products.find((element) => element.id === id);
      res(item);
    });
    promise
      .then((res) => {
        console.log("respuesta: " + res)
        setProducto(res)
      })
      .catch((e) => console.log(e));

  }, [id]);
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
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
              <ItemCount stock={5} onAdd={onAdd} />
            </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetailContainer;