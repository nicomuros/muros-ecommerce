import React from "react";
import {Card, Col} from "react-bootstrap";
import styles from "./Item.module.css"
import {Link} from "react-router-dom"
const Item = ({ item }) => {

  return (
    <Link to={`/itemDetail/${item.id}`}>
    <Col lg={5} className="mx-auto" style={{
      padding: "20px",
    }}>
      <Card  style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        border: "0px",
        float: "left"
      }}>
        <div className="aspect-ratio-square">
          <Card.Img variant="left" className={styles.imagen} src={item.img} />
        </div>
        <div className="pl-3">
          <Card.Body>
            <Card.Title className={styles.titulo}>{item.nombre}</Card.Title>
            <Card.Text className={styles.titulo}>{item.ingredientes.join(' - ')}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col></Link>
  );
};

export default Item;
