import React from "react";
import { NavLink } from "react-router-dom"
const Header = () => {
    return (<div>
        <h1>Expensify App</h1>
        <NavLink to="/" className="isActive">Home</NavLink>
        <NavLink to="/create" className="isActive">Create</NavLink>
        <NavLink to="/edit" className="isActive">Edit</NavLink>
        <NavLink to="/help" className="isActive">Help</NavLink>
    </div>)
}
export default Header;