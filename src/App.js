import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <CustomNavbar />
      <ItemListContainer greeting="Bienvenidos a la hamburgueseria!" />
    </>
  )
}

export default App;
