import React, { useState } from "react";
import Contacto from "./Contacto"
const ContactoContainer = () => {

  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

  //control de renderización del DOM
  const [errorList, setErrorList] = useState({
    userNameError: false,
    userEmailError: false,
    userPhoneError: false,
    userMessageError: false,
  });

  //control de mensaje enviado
  const [isSended, setIsSended] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrorList({ ...errorList, [`${event.target.name}Error`]: false }); //limpio mensaje de error
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;
    if (userData.userName.length < 4 || userData.userName.length > 15) {
      setErrorList((prevState) => ({ ...prevState, userNameError: true }));
      error = true;
    }
    if (!userData.userEmail.includes("@gmail.com")) {
      setErrorList((prevState) => ({ ...prevState, userEmailError: true }));
      error = true;
    }
    if (userData.userPhone.length !== 10) {
      console.log("error")
      setErrorList((prevState) => ({ ...prevState, userPhoneError: true }));
      error = true;
    }
    if (!userData.userMessage || userData.userMessage.trim() === "") {
      setErrorList((prevState) => ({ ...prevState, userMessageError: true }));
      error = true;
    }
    if (!error) {
      setIsSended(true);
    }
  };

  
  return (
    <Contacto handleChange={handleChange} handleSubmit={handleSubmit} isSended={isSended} errorList={errorList} />
  );
};

export default ContactoContainer;
