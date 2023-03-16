import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();
  
  useEffect(() => {
    const promise = new Promise((res) => {
      const item = products.find((element) => element.id === id);
      res(item);
    });
    promise
      .then((res) => {
        console.log("respuesta: " + res)
        setProducto(res)
      })
      .catch((e) => console.log(e));

  }, [id]);
  

  return (
    <ItemDetail producto={producto}/>
  );
};

export default ItemDetailContainer;