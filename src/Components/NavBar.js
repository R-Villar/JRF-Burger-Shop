import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <div>
            
            <NavLink to="/">Home</NavLink>
    
            <NavLink to="/about">Cart</NavLink>
            
        </div>
    )
}
export default NavBar