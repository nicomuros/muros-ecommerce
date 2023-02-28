import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./Item.module.css"
const Item = ({ item }) => {
  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} ${item.title} al carrito`);
  };

  return (
    <Col md={5} className="mx-auto offset-md-2" style={{
      padding: "20px",
    }}>
      <Card className={styles.cardstl}>
        <div className="aspect-ratio-square">
          <Card.Img variant="left" className={styles.imagen} src={item.img} />
        </div>
        <div className="pl-3">
          <Card.Body>
            <Card.Title className={styles.titulo}>{item.nombre}</Card.Title>
            <Card.Text className={styles.titulo}>{item.ingredientes}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default Item;
