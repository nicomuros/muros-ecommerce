import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axios from "axios"
import LoadingPage from "../LoadingPage/LoadingPage";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)
  
  useEffect(() => {
    setAreItemsCharged(false)
    setTimeout(() => {
      const getData = axios.get(`http://localhost:5000/products/${id}`)
      getData.then((res) => {
        setProducto(res.data)
      }).catch(e => console.log(e))
      setAreItemsCharged(true);
    },500)
  }, [id]);


  return (
    <div>
      {areItemsCharged
        ? <ItemDetail producto={producto}/>
        : <LoadingPage />}
    </div>
    
  );
};

export default ItemDetailContainer;