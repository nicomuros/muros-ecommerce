import Item from "./Item";
import Separador from "../Separador/Separador";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ items }) => {
  const renderItems = items
    ? items
    /*
    Se comparan primero las categorías. 
    Si son iguales, se compara el id de cada elemento, y se retorna el resultado 
    de la comparación en orden descendente (de mayor a menor). Si las categorías 
    son diferentes, se ordenan en orden ascendente por categoría, y se crea un 
    nuevo grupo con la categoría actual.
    */
      .sort((a, b) => {
        if (a.categoria === b.categoria) {
          return b.id - a.id; // Ordenar por id dentro de la misma categoría
        }
        return a.categoria > b.categoria ? 1 : -1; // Ordenar por categoría
      })
      .reduce((acc, curr) => {
        if (curr.categoria !== acc[1]) {
          acc = [
            [
              ...acc[0],
              <Separador categoryName={curr.categoria} key={uuidv4()} />,
              <Item item={curr} key={uuidv4()} />
            ],
            curr.categoria
          ];
        } else {
          acc = [
            [
              ...acc[0],
              <Item item={curr} key={uuidv4()} />
            ],
            curr.categoria
          ];
        }
        return acc;
      }, [[], null])
    : [];
  console.log(renderItems)
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        {renderItems[0]}
      </Row>
    </Container>
  );
};

export default ItemList;