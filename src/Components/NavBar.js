import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">JRF Burger Shop</Nav.Link>  
                    <Nav.Link href="/Customize">Make your own Burger</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>        
    )
}
export default NavBar