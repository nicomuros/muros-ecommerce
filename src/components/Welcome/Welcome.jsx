import { Carousel } from "react-bootstrap";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Separador from "../Separador/Separador";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="welcome-container">
    <Carousel interval={2000} fade>
      <Carousel.Item>
        <img className="d-block w-100 bg-img1" alt="a" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">ROCK</h3>
          <p className="h5 text-sm text-md text-lg">Y si no es rock, que no sea nada</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bg-img2" alt="a" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">&</h3>
          <p className="h5 text-sm text-md text-lg">Vení, disfrutá, reite y viví momentos únicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bg-img3" alt="a" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">BURGERS</h3>
          <p className="h5 text-sm text-md text-lg">Como ninguna que hayas probado</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Separador title={"Nuestro menu"}/>
    <ItemListContainer />
    </div>
  );
};

export default Welcome;
