import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import axios from "axios";
const ItemListContainer = () => {
  const [items, setItem] = useState();

  const  { categoryName } = useParams();
 
  useEffect(() => {
    const getData = axios.get("http://localhost:5000/products")
    getData.then((res) => {
      if (categoryName) {
        setItem(res.data.filter(item => item.categoria === categoryName))
      } else setItem(res.data)
    })
  },[categoryName])
  return (
    <div className="products"  style={{backgroundColor: "#fbbe00"}}>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
