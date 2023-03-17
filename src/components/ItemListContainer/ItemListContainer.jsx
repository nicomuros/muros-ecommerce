import { products } from "../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItem] = useState();

  const  { categoryName } = useParams();

  useEffect(() => {
    const promise = new Promise((res) => {
      res(categoryName ? products.filter(item => item.categoria === categoryName) : products);
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
