import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer/NavbarContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ContactoContainer from "./components/ContactoContainer/ContactoContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider> {/* envuelve todo aquello que va a tener contexto*/}
          <NavbarContainer />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/categories" element={ <ItemListContainer /> }/>
            <Route path="/categories/:categoryId/:categoryName" element={ <ItemListContainer /> }/>
            <Route path="/item/:id/:name" element={ <ItemDetailContainer /> }/>
            <Route path="/contactanos" element={ <ContactoContainer /> }/>
            <Route path="/cart" element={ <CartContainer /> }/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
