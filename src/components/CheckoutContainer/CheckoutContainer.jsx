import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutComponent from "./CheckoutComponent";

const CheckoutContainer = ({ setIsModalActive }) => {
  
  const { cartList, getCartTotalAmount } = useContext(CartContext);

  const [userData, setUserData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
  });
  const [showModal, setShowModal] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleClose = () => {
    setIsModalActive(false);
    setShowModal(false);
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const items = cartList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    const order = {
      buyer: userData,
      items: {...items},
      total: getCartTotalAmount(),
      date: new Date(),
    };

    console.log(order);

    setIsSubmitted(true);
  };

  const checkoutParams = {
    handleClose,
    showModal,
    handleChange,
    handleSubmit,
    isSubmitted
  }
  
  return (
    <CheckoutComponent {...checkoutParams} />
  );
};

export default CheckoutContainer;
