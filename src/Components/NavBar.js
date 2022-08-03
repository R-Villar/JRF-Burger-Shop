import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/">JRF Burger Shop</NavLink> 
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    <NavLink to="/customize">Customize</NavLink>
                </Nav>
            </Container>
        </Navbar>

        // <Navbar bg="dark" variant="dark" sticky="top">
        //     <Container>
        //         <Nav className="me-auto">
        //             <Nav.Link href="/">JRF Burger Shop</Nav.Link>  
        //             <Nav.Link href="/Customize">Make your own Burger</Nav.Link>
        //             {/* <NavLink to="/">Home</NavLink> */}
        //             <Nav.Link href="/">Home</Nav.Link>
        //             <Nav.Link href="/cart">Cart</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>        
    )
}
export default NavBar