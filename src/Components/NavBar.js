import { Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <Navbar>
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/">JRF Burger Shop</NavLink>
                    <NavLink to="/Customize">Make your own Burger</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </Nav>
            </Container>
        </Navbar>    
        
    )
}
export default NavBar