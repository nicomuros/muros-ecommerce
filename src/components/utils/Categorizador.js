export function Categorizador(items = []) {
  const itemsOrdenados = sortItems(items)
  const itemsTitulados = addTitles(itemsOrdenados)
  console.log(itemsTitulados)
  return itemsTitulados
}
  
const sortItems = (items) => {
  return items.sort((currProduct, nextProduct) => {
    if (currProduct.categoria === nextProduct.categoria) {
      return nextProduct.id - currProduct.id; // Ordenar por id dentro de la misma categoría
    }
    return currProduct.categoria > nextProduct.categoria ? 1 : -1; // Ordenar por categoría
  })
}
  
const addTitles = (itemsOrdenados) => {
  return itemsOrdenados.reduce((acc, item, index) => {
    const prevCategory = index > 0 && itemsOrdenados[index - 1].categoria
    return prevCategory !== item.categoria
      ? [...acc, { type: "titulo", titulo: item.categoria }, item]
      : [...acc, item]
  }, [])
}
 