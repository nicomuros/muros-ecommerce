import { products } from "../productsMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItem] = useState();

  const  { categoryName } = useParams();


  const productosFiltrados = products.filter(item => item.categoria === categoryName)

  useEffect(() => {
    const promise = new Promise((res) => {
      res(categoryName ? productosFiltrados : products);
    });
    promise
      .then((res) => {
        setItem(res)
      })
      .catch((e) => console.log(e));

  }, [categoryName]);

  return (
    <div className="products"  style={{backgroundColor: "#fbbe00"}}>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
