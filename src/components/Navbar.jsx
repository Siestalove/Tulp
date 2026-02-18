import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    J&G Tulip Atelier
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
