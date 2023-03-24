import { createContext, useState } from "react"

export const CartContext = createContext() //idealmente, el mismo nombre que el archivo

const CartContextProvider = ( {children} ) => { //este es el componente que provee el contexto

  const [cartList, setCartList] = useState([]);
  
  const addToCart = (productWithQuantity) => {
    if (isInCart(productWithQuantity.id)){
      const productIndex =  cartList.findIndex(product => product.id === productWithQuantity.id);
      const updatedCartList = [...cartList]
      updatedCartList[productIndex] = productWithQuantity
      setCartList(updatedCartList)
    } else {
      setCartList([...cartList, productWithQuantity])
    }
  }

  const isInCart = (id) => {
    return cartList.some((product) => product.id === id)
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


  const getCartTotalQuantity = () => {
    const total =  cartList.reduce((acc, curr) => {
      return (acc + curr.cantidad)
    },0)
    return total
  }

  const getCartTotalAmount = () => {
    const total =  cartList.reduce((acc, curr) => {
      return (acc + (curr.cantidad * curr.precio))
    },0)
    return total
  }

  const getProductQuantity = (id) => {
    let productInitialQuantity = 1
    if (isInCart(id)){
      productInitialQuantity = cartList.find((producto) => producto.id === id).cantidad;
    }
    return productInitialQuantity
  }

  const cleanCart = () => {
    setCartList([])
  }
  const cartContextList = {
    cartList,
    setCartList,
    addToCart,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProduct,
    getCartTotalAmount,
    cleanCart,
    getCartTotalQuantity,
    getProductQuantity
  }

  //value va a manejar todo lo que quiero proveer al contexto
  return (
    <CartContext.Provider value={ cartContextList }>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider