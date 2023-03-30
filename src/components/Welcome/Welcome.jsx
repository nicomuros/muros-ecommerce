import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Separador from "../Separador/Separador";
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
    <Carousel interval={2000} fade>
      <Carousel.Item>
        <img className="d-block w-100 bg-img1" alt="" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">ROCK</h3>
          <p className="h5 text-sm text-md text-lg">Y si no es rock, que no sea nada</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bg-img2" alt="" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">&</h3>
          <p className="h5 text-sm text-md text-lg">Vení, disfrutá, reite y viví momentos únicos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 bg-img3" alt="" />
        <Carousel.Caption>
          <h3 className="display-1 text-sm text-md text-lg">BURGERS</h3>
          <p className="h5 text-sm text-md text-lg">Como ninguna que hayas probado</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container fluid>
        <Row m={0}>
            <Col lg={6} style={{backgroundColor: "#fbbe00"}} className="d-flex justify-content-center align-items-center">
                <Col lg={8} className="py-lg-0 py-5">
                    <h5>ACERCATE A NUESTRO LOCAL</h5>
                    <h3>AMAMOS LO QUE HACEMOS</h3>
                    <p py-lg={0}>Descubre nuestra pasión por la comida y vive una experiencia única en nuestra hamburguesería. Nuestro staff experto trabaja con ingredientes frescos y de primera para garantizar el sabor y la calidad de cada burger. ¡Te esperamos!</p>
                    <Button href="/menu" variant="dark"> <span pr={2}>Reservar una mesa</span> </Button>
                </Col>
            </Col>
            <Col lg={6} style={{backgroundColor: "#fbbe00"}} className="p-0 d-flex justify-content-center align-items-center">
                <img src="https://www.ronnie.com.ar/resources/img/index-02.jpg" className="w-100" alt=""/>
            </Col>
        </Row>
    </Container>
    <Separador title={"Nuestro menu"}/>
    <ItemListContainer />
    </>
  );
};

export default Welcome;
