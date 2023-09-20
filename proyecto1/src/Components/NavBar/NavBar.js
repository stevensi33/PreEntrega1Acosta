import React from 'react'
import Logo from '../Logo'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <Logo /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/Tenis">Tenis</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/Camiseta">Camiseta</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/Short">Short</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><CartWidget /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar