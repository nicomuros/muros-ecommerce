import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <Col lg={6} style={{
    }}>
      <Link to={`/item/${item.id}`} className={styles.link}>
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "transparent",
            margin: "10px",
            minWidth: "160px",
            border: "0px"
          }} className={styles.cardCustom}
        >
          <div className="aspect-ratio-square">
            <Card.Img variant="left" className={styles.imagen} src={item.img} />
          </div>
          <div className="pl-3">
            <Card.Body>
              <Card.Text className={` ${styles.titulo}`}>{item.nombre}</Card.Text>
              <Card.Text className={styles.texto}>
                {item.ingredientes.join(" - ")}
              </Card.Text>
              <Card.Text className={styles.precio}>
                ${item.precio}
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default Item;