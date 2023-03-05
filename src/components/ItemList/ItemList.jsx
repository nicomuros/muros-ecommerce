import Item from "../Item/Item";
import Separador from "../Separador/Separador";
import { Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ items }) => {
  const renderItems = items
    ? items.reduce((acc, curr) => {
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