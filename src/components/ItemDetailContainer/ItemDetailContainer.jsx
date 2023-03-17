import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axios from "axios"
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();
  
  useEffect(() => {
    const getData = axios.get(`http://localhost:5000/products/${id}`)
    getData.then((res) => {
      setProducto(res.data)
    }).catch(e => console.log(e))
  }, [id]);
  

  return (
    <ItemDetail producto={producto}/>
  );
};

export default ItemDetailContainer;