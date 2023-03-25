import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const [items, setItem] = useState();
  const [areItemsCharged, setAreItemsCharged] = useState(false)

  const  { categoryName } = useParams();
  
  useEffect(() => {
    const filterQuery = () => {
      const itemsCollection = collection(db, "products")
      if (categoryName){
        return query(itemsCollection, where("category", "==", categoryName))
      } else return itemsCollection
    }
    
    setAreItemsCharged(false)
    const queryFiltered = filterQuery()
    getDocs(queryFiltered)
      .then(res => {
        let receivedProducts = handleProductData(res)
        setItem(receivedProducts)
        setAreItemsCharged(true   )
      })
  },[categoryName])
   

  const handleProductData = (dataReceived) => {
    return dataReceived.docs.map((hostProduct) => {
      return {
        ...hostProduct.data(),
        hostId: hostProduct.id
      }
    })
  }

  /*
    setTimeout(() => {
      const getData = axios.get("http://localhost:5000/products")
      getData.then((res) => {
        if (categoryName) {
          setItem(res.data.filter(item => item.categoria === categoryName))
          
        } else setItem(res.data)
      })
      setAreItemsCharged(true);
    },500)
    
    */
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
