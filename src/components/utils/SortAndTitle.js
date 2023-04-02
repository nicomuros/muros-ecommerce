export function sortAndTitle (items = []) {
  const itemsOrdenados = sortItems(items)
  const itemsTitulados = addTitles(itemsOrdenados)
  return itemsTitulados
}
  
const sortItems = (items) => {
  return items.sort((currProduct, nextProduct) => {
    if (currProduct.category === nextProduct.category) {
      return nextProduct.id - currProduct.id; // Ordenar por id dentro de la misma categoría
    }
    return currProduct.category > nextProduct.category ? 1 : -1; // Ordenar por categoría
  })
}
  
const addTitles = (itemsOrdenados) => {
  return itemsOrdenados.reduce((acc, item, index) => {
    const prevCategory = index > 0 && itemsOrdenados[index - 1].category
    return prevCategory !== item.category
      ? [...acc, { type: "titulo", titulo: item.category }, item]
      : [...acc, item]
  }, [])
}
 