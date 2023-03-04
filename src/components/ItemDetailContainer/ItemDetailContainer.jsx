import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../productsMock'

const ItemDetailContainer = () => {

    const {id} = useParams()
    const productSelected = products.find((element) =>  element.id === id)
  
    return (
    <h1>Estoy en el detail. Hamburguesa seleccionada: {productSelected.nombre} </h1>
  )
}

export default ItemDetailContainer