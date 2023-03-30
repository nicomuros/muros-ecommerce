import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"
import { sortAndTitle } from "../utils/SortAndTitle";

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
        const receivedProducts = handleProductData(res)
        const sortedProducts = sortAndTitle(receivedProducts)
        setItem(sortedProducts)
        console.log("true")
        setAreItemsCharged(true)
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
  
  return (
    <>
    {
      (areItemsCharged) 
      ? <div className="products"  style={{backgroundColor: "#fbbe00", paddingBottom: 50}}>
         <ItemList items={items} />
        </div>
      : <LoadingPage />
    }
    </>
  );
};
export default ItemListContainer;
