import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/Customize">Make your own Burger</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">JRF Burger Shop</NavLink>  
                </Nav>
            </Container>
        </Navbar>        
    )
}
export default NavBar