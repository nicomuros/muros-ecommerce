import Item from "./Item";
//import Separador from "../Separador/Separador";
import { Container, Row } from "react-bootstrap";
//import { v4 as uuidv4 } from "uuid";
import {Categorizador} from "../utils/Categorizador.js"
import Separador from "../Separador/Separador";
const ItemList = ({ items }) => {
  const renderItems = Categorizador(items)
    .map((elemento) => {
      console.log(elemento);
      return elemento
    })
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {renderItems.map((elemento) => {
          if (elemento.type) {
            return <Separador categoryName={elemento.titulo} />
          } else {
            return <Item item={elemento} />
          }
        })}
      </Row>
    </Container>
  );
};

export default ItemList;