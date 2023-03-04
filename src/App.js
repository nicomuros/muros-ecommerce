import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import Welcome from "./components/Welcome/Welcome";

//<Route path ="/itemDetail/:id" element = {<ItemDetailContainer />} />

function App() {
  return (
    <>
    <BrowserRouter>

      <CustomNavbar />

      <Routes>

        <Route path = "/" element = { <Welcome /> }/>
        <Route path= "/cart" element = { <h1>Estoy en la vista carrito</h1>} />
        
      </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App;
