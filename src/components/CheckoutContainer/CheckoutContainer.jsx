import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutComponent from "./CheckoutComponent";

const CheckoutContainer = ({ setIsModalActive }) => {
  
  const {cartList, getCartTotalAmount } = useContext(CartContext);
  const [showModal, setShowModal] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [areDataReady, setAreDataReady] = useState(false);

  //Este useEffect es para asegurarnos que el state de checkoutData se ha actualizado
  //con los datos del formulario antes de enviarlos a firebase (al ser un proceso asincrono)
  useEffect(() => {
    if (isSubmitted) {
      setAreDataReady(true);
    }
  },[isSubmitted]);

  const  getItemsProps = () => {
    return cartList.map((item) => {
      return {
        hostId: item.hostId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });
  };

  const [checkoutData, setCheckoutData] = useState({
    items: getItemsProps(),
    total: getCartTotalAmount()
  });

  const handleClose = () => {
    setIsModalActive(false);
    setShowModal(false);
  };
 
  const checkoutParams = {
    handleClose,
    showModal,
    areDataReady,
    checkoutData,
    setCheckoutData,
    setIsSubmitted
  }
  
  return (
    <CheckoutComponent {...checkoutParams} />
  );
};

export default CheckoutContainer;
