import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <Col lg={6}>
      <Link to={`/item/${item.hostId}/${item.name}`} className={styles.link}>
        <Card
          className={`${styles.cardCustom} border-0`}
          style={{ backgroundColor: "transparent", margin: "10px" }}
        >
          <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-column flex-md-row">
            <div className="aspect-ratio-square">
              <Card.Img variant="left" className={styles.imagen} src={item.img} />
            </div>
            <div className="pl-3">
              <Card.Body>
                <Card.Text className={styles.titulo}>{item.name}</Card.Text>
                <Card.Text className={styles.texto}>
                  {item.ingredients.join(" - ")}
                </Card.Text>
                <Card.Text className={styles.precio}>
                  ${item.price}
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default Item;