import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import Titulador from "../Titulador/Titulador";
const ItemList = ({ items = [] }) => {
 
  return (
    <Container
      style={{
        minHeight: "100vh",
        paddingTop: 80
      }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        {(items.length > 0) ?
          items.map((elemento) => {
            if (elemento.type)
              return <Titulador title={elemento.titulo} key={uuidv4()} />;
            else return <Item item={elemento} key={uuidv4()} />;
          }) : <h1 style={{
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 50
          }}>No se encontró la categoría</h1>}
      </Row>
    </Container>
  );
};

export default ItemList;
