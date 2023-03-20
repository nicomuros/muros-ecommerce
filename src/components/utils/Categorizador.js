export function Categorizador(items) {
  const categorizados = items
    ? items

        .sort((currProduct, nextProduct) => {
          if (currProduct.categoria === nextProduct.categoria) {
            return nextProduct.id - currProduct.id; // Ordenar por id dentro de la misma categoría
          }
          return currProduct.categoria > nextProduct.categoria ? 1 : -1; // Ordenar por categoría
        })
        //TODO: Clean the reduce code
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
