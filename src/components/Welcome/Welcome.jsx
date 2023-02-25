import { Container } from 'react-bootstrap';
import  "./Welcome.css"
const Welcome = () => {
  return (
    <div className="bg-image">
      
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center text-white">¡Bienvenido!</h1>
      </Container>
    </div>
  );
};

export default Welcome