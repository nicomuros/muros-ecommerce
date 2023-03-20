import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ContactoContainer from "./components/ContactoContainer/ContactoContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider> {/* envuelve todo aquello que va a tener contexto*/}
          <CustomNavbar />

          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/category/:categoryName" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailContainer /> }/>
            <Route path="/contactanos" element={ <ContactoContainer /> }/>
            <Route path="/cart" element={ <CartContainer /> }/>
            <Route path="*" element={<h1> error 404: Not found </h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
