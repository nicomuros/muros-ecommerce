import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import Welcome from "./components/Welcome/Welcome";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import TextImg from "./components/TextImg/TextImg";
import Separador from "./components/Separador/Separador";

function App() {
  return (
    <>
    <CustomNavbar />
    <Welcome />
    <TextImg />
    <Separador text="ROCK'N BURGER"/>
    <TextImg />
    <Separador text="SEPARADOR 2"/>
    </>
  )
}

export default App;
