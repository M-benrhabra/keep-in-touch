import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
    const {title} = props;
    
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py0">
            <div className="container">
                <Link to= '/' className= 'navbar-brand'> {title}</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link"> Contact Us </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link"> Dashboard </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/response" className="nav-link"> Response </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
       
    )
}

export default Header;
