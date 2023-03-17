import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {Categorizador} from "../utils/Categorizador.js"
import Separador from "./Separador";
const ItemList = ({ items }) => {
  const renderItems = Categorizador(items)
  console.log(renderItems)
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {renderItems && renderItems.map((elemento) => {
          if (elemento.type) return <Separador categoryName={elemento.titulo} key={uuidv4()}/>
          else return <Item item={elemento} key={uuidv4()} />
        })}
      </Row>
    </Container>
  );
};

export default ItemList;