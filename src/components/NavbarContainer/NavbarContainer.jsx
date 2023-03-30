import NavbarComponent from "./NavbarComponent"
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";

const CustomNavbar = () => {

  const [categories, setCategories] = useState([])
  const [areCategoriesCharged, setAreCategoriesCharged] = useState(false)

  useEffect(() => {
    setAreCategoriesCharged(false)
    const categoriesCollection = collection(db, "categories")
    getDocs(categoriesCollection)
      .then(receivedCategories => {
        const categoriesHandled = handleReceivedCategories(receivedCategories);
        const categoriesSorted = sortCategories(categoriesHandled)
        setCategories(categoriesSorted)
        setAreCategoriesCharged(true)
      })
  },[])

  const handleReceivedCategories = (dataReceived) => {
    return dataReceived.docs.map((hostCategory) => {
      return {
        id: hostCategory.id,
        ...hostCategory.data()
      }
    })
  }

  const sortCategories = (categories) => {
    return categories.sort((a,b) => {
      if (a.position > b.position) return 1;
      if (a.position < b.position) return -1;
      return 0;
    })
  }
  const navbarProps = {
    categories,
    areCategoriesCharged
  }
  return (
    <NavbarComponent {...navbarProps}/>
  );
};

export default CustomNavbar;
