import { createContext, useState } from "react"

export const CartContext = createContext() //idealmente, el mismo nombre que el archivo

const CartContextProvider = ( {children} ) => { //este es el componente que provee el contexto

  const [cartList, setCartList] = useState([]);
  
  const agregarAlCarrito = (productoRecibido, quantity) => {
    

    if (!isInCart(productoRecibido.id)){

      const productoNuevo = {
        ...productoRecibido,
        cantidad: quantity
      }
      setCartList([...cartList, productoNuevo])
    } else {
      setCartList(updateQuantity(productoRecibido.id, quantity))
    }

    
  }

  const isInCart = (id) => {
    return cartList.some((producto) => producto.id === id)
  }

  const updateQuantity = (id, quantity) => {
    return cartList.map((elemento) => {
      if (elemento.id === id){
        elemento.cantidad += quantity;
        return elemento
      } else return elemento
    })
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