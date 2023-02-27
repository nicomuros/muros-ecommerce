import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} ${item.title} al carrito`);
  };

  return (
    <Col xs={12} md={6} lg={4} xl={3}style={{
      padding: "20px",
      margin: "0 400px"
    }}>
      <Card  style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",  
        height: "200px",
        width: "800px"
      }}>
        <div className="aspect-ratio-square">
          <Card.Img variant="top" src={item.img}style={{
        width: "200px",
        height: "200px"
      }}/>
        </div>
        <div className="pl-3">
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.ingredientes}</Card.Text>
            <Card.Text>${item.precio}</Card.Text>
            <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default Item;
