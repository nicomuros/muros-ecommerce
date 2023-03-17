import React, { useState } from "react";

const ContactoContainer = () => {

  const [userData, setUserData] = useState({userName: '', userEmail: '', userPhone: '', userMessage: ''});

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name] : event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.userName.length < 4 || userData.userName.length > 15) console.log("Largo de nombre invalido")
    else if (!userData.userEmail.includes("@gmail.com")) console.log("correo inválido")
    else if (userData.userPhone.lenght > 10) console.log("largo del telefono invalido")
    else if (userData.userMessage === "") console.log("no escribió el mensaje")
    else console.log("mensaje enviado")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        placeholder="ingrese su nombre"
        onChange={handleChange}
      />
      <input
        type="text"
        name="userEmail"
        placeholder="ingrese su email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="userPhone"
        placeholder="ingrese su telefono"
        onChange={handleChange}
      />
      <input
        type="text"
        name="userMessage"
        placeholder="ingrese el mensaje"
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactoContainer;
