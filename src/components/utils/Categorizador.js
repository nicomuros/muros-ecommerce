import Separador from "../Separador/Separador";
import { v4 as uuidv4 } from "uuid";
export function Categorizador(items) {
  const categorizados = items
    ? items

        .sort((a, b) => {
          if (a.categoria === b.categoria) {
            return b.id - a.id; // Ordenar por id dentro de la misma categoría
          }
          return a.categoria > b.categoria ? 1 : -1; // Ordenar por categoría
        })
        .reduce(
          (acc, curr) => {
            if (curr.categoria !== acc[1]) {
              acc = [
                [
                  ...acc[0],
                  {type: "titulo",
                  titulo: curr.categoria},
                  curr,
                ], curr.categoria,
              ];
            } else {
              acc = [[...acc[0], curr], curr.categoria];
            }
            return acc;
          },
          [[], null]
        )
    : [];
    return categorizados[0]
  
  
  ;
}
