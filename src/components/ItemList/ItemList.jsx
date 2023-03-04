import React from "react";
import { Container, Row } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemList.module.css"

const ItemList = ( {items=[] } ) => {
  const carneProducts = items.filter((curr) => curr.categoria === "carne");
  const veggieProducts = items.filter((curr) => curr.categoria === "veggie");
  const fritasProducts = items.filter((curr) => curr.categoria === "fritas");
  return (
    <Container><Row>
      <h1 className={`${styles.titulo} text-center`}>CARNE</h1>
      {
         carneProducts.map((item) => {
          return <Item key={uuidv4()} item={item} />
         })
      }
      <h1 className={`${styles.titulo} text-center`}>PAPAS FRITAS</h1>
      {
         fritasProducts.map((item) => {
          return <Item key={uuidv4()} item={item} />
         })
      }
      <h1 className={`${styles.titulo} text-center`}>VEGGIES</h1>
      {
         veggieProducts.map((item) => {
          return <Item key={uuidv4()} item={item} />
         })
      }
      <ItemCount stock={5} initial={1}/>
    </Row></Container>
  );
};

export default ItemList;
