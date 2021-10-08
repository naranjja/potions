import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Footer (props) {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>{ props.text }</Navbar.Brand>
            </Container>
        </Navbar>
    )
}