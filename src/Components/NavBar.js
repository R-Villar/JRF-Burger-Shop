import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

function NavBar() {
	return (
		<Navbar bg='dark' variant='dark' sticky='top'>
			<Container>
				<Nav className='me-auto'>
					<Nav.Link as={NavLink} to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to='/user-created'>
						Create Your Own
					</Nav.Link>
					<Nav.Link as={NavLink} to='/cart'>
						Cart
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default NavBar;
