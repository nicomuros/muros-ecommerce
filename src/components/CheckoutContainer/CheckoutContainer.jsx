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
    buyer: {
      userName: "",
      userPhone: "",
      userEmail: ""
    },
    items: getItemsProps(),
    total: getCartTotalAmount()
  });

  const handleClose = () => {
    setIsModalActive(false);
    setShowModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const buyerDataUpdated = { ...checkoutData.buyer, [name]: value };
    setCheckoutData({...checkoutData, buyer: {...buyerDataUpdated}});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderWithDate = { ...checkoutData, date: new Date() };

    setCheckoutData(orderWithDate);
    setIsSubmitted(true);
  };
  
  const checkoutParams = {
    handleClose,
    showModal,
    handleChange,
    handleSubmit,
    areDataReady,
    checkoutData
  }
  
  return (
    <CheckoutComponent {...checkoutParams} />
  );
};

export default CheckoutContainer;
