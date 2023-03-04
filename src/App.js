import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar"
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />

        <Routes>
          <Route />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
