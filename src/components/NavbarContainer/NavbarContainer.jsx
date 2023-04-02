import NavbarComponent from "./NavbarComponent"
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";

const CustomNavbar = () => {

  const [categories, setCategories] = useState([])
  const [areCategoriesCharged, setAreCategoriesCharged] = useState(false)
  const [dropdownStylesForMobile, setDropdownStylesForMobile] = useState([""])

  // usamos un useEffect para que se ejecute una sola vez. 
  // El event.listener está dentro de un useEffect para prevenir
  // que se agregue a un elemento del DOM que no existe.
  useEffect(() => {
    // callback function to set state based on window width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setDropdownStylesForMobile(screenWidth <= 768 ? {
        width: "w-100",
        textCenter: "text-center"} : "");
    };
    handleResize();


    // Add event listener to update state on resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    areCategoriesCharged,
    dropdownStylesForMobile
  }
  return (
    <NavbarComponent {...navbarProps}/>
  );
};

export default CustomNavbar;
