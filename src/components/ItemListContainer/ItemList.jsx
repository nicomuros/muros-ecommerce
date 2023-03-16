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

    1. Se llama al método sort() para ordenar el array de objetos items según la 
       categoría de cada elemento y su id en orden descendente.

    2. Se llama al método reduce() para agrupar los elementos por categoría y crear 
       un array de elementos para renderizar en la vista.

    3. El primer parámetro de reduce() es una función que recibe dos argumentos: 
       acc (acumulador) y curr (elemento actual). acc se inicializa con un array 
       vacío y el valor null para la categoría.

    4. Se verifica si la categoría del elemento actual es diferente a la categoría 
    del acumulador (acc[1]).

    5. Si la categoría es diferente, se crea un nuevo grupo de elementos en el acumulador 
    que incluye un separador y el elemento actual.

    6. Si la categoría es la misma, se agrega el elemento actual al grupo actual en el acumulador.

    7. El método reduce() retorna el acumulador actualizado después de cada iteración.
    
    8.Finalmente, el método renderItems retorna un array con los elementos agrupados y ordenados para renderizar en la vista.

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