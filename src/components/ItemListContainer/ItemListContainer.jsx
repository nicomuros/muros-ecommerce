import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = (props) => {
    return <Container>
    <Row>
        <Col><h1 className="display-1">{props.greeting}</h1></Col>
    </Row>
</Container>
}
export default ItemListContainer