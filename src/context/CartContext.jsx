import { createContext, useState } from "react"

export const CartContext = createContext() //idealmente, el mismo nombre que el archivo

const CartContextProvider = ( {children} ) => { //este es el componente que provee el contexto

  const [cartList, setCartList] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    //verifico que no esté en el carrito
    setCartList([...cartList, producto])
  }

  const cartContextList = {
    cartList,
    setCartList,
    agregarAlCarrito
  }

  //value va a manejar todo lo que quiero proveer al contexto
  return (
    <CartContext.Provider value={ cartContextList }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider