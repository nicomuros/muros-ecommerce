import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";

const ItemListContainer = () => {
  const [items, setItem] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)

  const  { categoryName } = useParams();
 
  useEffect(() => {
    setAreItemsCharged(false)
    setTimeout(() => {
      const getData = axios.get("http://localhost:5000/products")
      getData.then((res) => {
        if (categoryName) {
          setItem(res.data.filter(item => item.categoria === categoryName))
          
        } else setItem(res.data)
      })
      setAreItemsCharged(true);
    },500)
    
    
  },[categoryName])
  return (
    <>
    {
      (areItemsCharged) 
      ? <div className="products"  style={{backgroundColor: "#fbbe00"}}>
         <ItemList items={items} />
        </div>
      : <LoadingPage />
    }
    </>
  );
};
export default ItemListContainer;
