import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import Welcome from "./components/Welcome/Welcome";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import TextImg from "./components/TextImg/TextImg";
import Separador from "./components/Separador/Separador";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ConsumiendoApi from "./components/ConsumiendoApi/ConsumiendoApi";

function App() {
  return (
    <>
    <CustomNavbar />
    <Welcome />
    <TextImg />
    <Separador text="ROCK'N BURGER"/>
    <ItemListContainer />
    <ConsumiendoApi />
    </>
  )
}

export default App;
