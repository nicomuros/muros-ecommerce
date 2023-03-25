import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axios from "axios"
import LoadingPage from "../LoadingPage/LoadingPage";
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)
  
  const {addToCart, getProductQuantity} = useContext(CartContext)

  const initial = producto && getProductQuantity(producto.id)
  
  const onAdd = (quantity) => {
    const productWithQuantity = {
      ...producto,
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
    producto,
    initial,
    onAdd
  }
  
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
        ? <ItemDetail {...itemDetailProps}/>
        : <LoadingPage />}
    </div>
    
  );
};

export default ItemDetailContainer;