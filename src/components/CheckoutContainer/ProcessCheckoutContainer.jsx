import React, { useEffect, useState, useContext } from 'react'
import ProcessCheckoutComponent from './ProcessCheckoutComponent'
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ProcessCheckoutContainer = ({checkoutData}) => {

  const [isOrderBeingSent, setIsOrderBeingSent] = useState(true)
  const [orderId, setOrderId] = useState(null)

  const [orderInHost, setOrderInHost] = useState(null)
  const [areOrderDataReceived, setAreOrderDataReceived] = useState(false)

  useEffect(() => {
    
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, checkoutData)
      .then((res) => {
        setOrderId(res.id);
      })
      .catch((err) => console.log(err));
    }, [checkoutData])
    
    useEffect(() => {
      if (orderId) {
        const queryById = doc(collection(db, "orders"), orderId);
        getDoc(queryById)
          .then((receivedProduct) => {
            setOrderInHost(receivedProduct.data());
            setAreOrderDataReceived(true);
          });
      }
    }, [orderId])

    useEffect(() => {
      if (areOrderDataReceived) {
        setIsOrderBeingSent(false);
      }
    }, [areOrderDataReceived])

  return (
      <ProcessCheckoutComponent isOrderBeingSent={isOrderBeingSent} orderInHost={orderInHost}/>
    )
  
}

export default ProcessCheckoutContainer