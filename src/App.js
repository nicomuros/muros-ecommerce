import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import Welcome from "./components/Welcome/Welcome";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
    <CustomNavbar />
    <Welcome />
    <ItemListContainer greeting="¡Bienvenidos!" />

    </>
  )
}

export default App;
