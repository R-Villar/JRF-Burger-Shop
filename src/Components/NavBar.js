import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div>    
            <NavLink to="/">JRF Burger Shop</NavLink>
            
            <NavLink to="/Customize">Make your own Burger</NavLink>
            
            <NavLink to="/">Home</NavLink>
            
            <NavLink to="/cart">Cart</NavLink>
            
        </div>
    )
}
export default NavBar