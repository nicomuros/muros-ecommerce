import NavbarComponent from "./NavbarComponent"
import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"
import { useEffect, useState } from "react";

const CustomNavbar = () => {

  const [categories, setCategories] = useState([])
  const [areCategoriesCharged, setAreCategoriesCharged] = useState(false)

  useEffect(() => {
    const categoriesCollection = collection(db, "categories")
    getDocs(categoriesCollection)
      .then(res => {
        let receivedCategories = handleCategoryData(res)
        setCategories(receivedCategories)
        setAreCategoriesCharged(true)
      })
  },[])

  const handleCategoryData = (dataReceived) => {
    return dataReceived.docs.map((hostCategory) => {
      return {
        ...hostCategory.data(),
        hostId: hostCategory.id
      }
    })
  }



  return (
    <NavbarComponent />
  );
};

export default CustomNavbar;
