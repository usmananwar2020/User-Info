import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <NavLink className="navbar navbar-expand-lg text-primary text-decoration-none" to="/">
                <h2>Contact Manager</h2>
            </NavLink>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <div className="container">
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/About">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-outline-light" exact to="/addUser">Add User</Link>
                </div>
            </nav>
        </>

    )
}

export default Navbar
