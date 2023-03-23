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

  const decreaseProductQuantity = (id) => {
    const product = cartList.find((producto) => producto.id === id);
    if (product.cantidad > 1) {
      const newCartList = cartList.map((elemento) => {
        if (elemento.id === id) {
          return {...elemento, cantidad: elemento.cantidad-1}
        } else return elemento
      })
      setCartList(newCartList)
    }
  }

  const increaseProductQuantity = (id) => {
    const product = cartList.find((producto) => producto.id === id);
    if (product.cantidad < 6) {
      const newCartList = cartList.map((elemento) => {
        if (elemento.id === id) {
          return {...elemento, cantidad: elemento.cantidad+1}
        } else return elemento
      })
      setCartList(newCartList)
    }
  }

  const deleteProduct = (id) => {
    const newCartList = cartList.filter((elemento) => elemento.id !== id)
    setCartList(newCartList)
  }

  const updateQuantity = (id, quantity) => {
    return cartList.map((elemento) => {
      if (elemento.id === id){
        elemento.cantidad += quantity;
        return elemento
      } else return elemento
    })
  }
  
  const totalAmount = () => {
    const total =  cartList.reduce((acc, curr) => {
      return (acc + (curr.cantidad * curr.precio))
    },0)
    return total
  }

  const limpiarCarrito = () => {
    setCartList([])
  }
  const cartContextList = {
    cartList,
    setCartList,
    agregarAlCarrito,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProduct,
    totalAmount,
    limpiarCarrito
  }

  //value va a manejar todo lo que quiero proveer al contexto
  return (
    <CartContext.Provider value={ cartContextList }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider