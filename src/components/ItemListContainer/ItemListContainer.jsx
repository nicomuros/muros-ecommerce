import { products } from "../productsMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    const promise = new Promise((res) => {
      res(products);
    });
    promise.then((response) => setItem(response)).catch((e) => console.log(e));

  }, []);

  return (
    <div className="products"  style={{backgroundColor: "#fbbe00"}}>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
