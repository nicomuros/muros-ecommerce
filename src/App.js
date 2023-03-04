import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import Welcome from "./components/Welcome/Welcome";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import TextImg from "./components/TextImg/TextImg";
import Separador from "./components/Separador/Separador";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ConsumiendoApi from "./components/ConsumiendoApi/ConsumiendoApi";
import { BrowserRouter, Routes, Route}  from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <>
    <BrowserRouter>

      <CustomNavbar />

      <Routes>

        <Route path = "/" element = { <ItemListContainer /> }/>
        <Route path= "/cart" element = { <h1>Estoy en la vista carrito</h1>} />
        <Route path ="/itemDetail/:id" element = {<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
