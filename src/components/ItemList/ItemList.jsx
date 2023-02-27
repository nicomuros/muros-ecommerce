import React from "react";
import { Container, Row } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';
import Item from "../Item/Item";

const ItemList = ( {items=[] } ) => {
  const carneProducts = items.filter((curr) => curr.categoria === "carne");
  const veggieProducts = items.filter((curr) => curr.categoria === "veggie");
  const fritasProducts = items.filter((curr) => curr.categoria === "fritas");
  return (
    <Container><Row>
      <h1>Carne</h1>
      {
         carneProducts.map((item) => {
          return <Item key={item.id} item={item} />
         })
      }
      <h1>Fritas</h1>
      {
         fritasProducts.map((item) => {
          return <Item key={item.id} item={item} />
         })
      }
      <h1>Veggies</h1>
      {
         veggieProducts.map((item) => {
          return <Item key={item.id} item={item} />
         })
      }
    </Row></Container>
  );
};

export default ItemList;
