import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoadingPage from "../LoadingPage/LoadingPage";
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import {getDoc, collection, doc} from "firebase/firestore"
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  
  const { id } = useParams();
  
  const [product, setProduct] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)
  
  useEffect(() => {
    setAreItemsCharged(false);
    const itemCollection = collection(db, "products");
    const queryById = doc(itemCollection, id);
    getDoc(queryById)
    .then(receivedProduct => {
      setProduct({
        ...receivedProduct.data(),
        hostId: receivedProduct.id
      });
      setAreItemsCharged(true);
    })
  }, [id]);
  
  const {addToCart, getProductQuantity} = useContext(CartContext)
  
  const initial = product && getProductQuantity(product.id)
  
  const onAdd = (quantity) => {
    const productWithQuantity = {
      ...product,
      quantity
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(productWithQuantity);
  }
  
  
  const itemDetailProps = {
    product,
    initial,
    onAdd
  }
  
  return (
    <div>
      {areItemsCharged
        ? <ItemDetail {...itemDetailProps}/>
        : <LoadingPage />}
    </div>
    
  );
};

export default ItemDetailContainer;