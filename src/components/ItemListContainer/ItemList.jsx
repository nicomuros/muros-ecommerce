import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Categorizador } from "../utils/Categorizador.js";
import Titulador from "../Titulador/Titulador";
const ItemList = ({ items }) => {
  const renderItems = Categorizador(items);
  return (
    <Container
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        {renderItems &&
          renderItems.map((elemento) => {
            if (elemento.type)
              return <Titulador title={elemento.titulo} key={uuidv4()} />;
            else return <Item item={elemento} key={uuidv4()} />;
          })}
      </Row>
    </Container>
  );
};

export default ItemList;
