import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    J&G Tulip Atelier
                </Link>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                    >
                        Главная
                    </Link>
                    <Link
                        to="/catalog"
                        className={location.pathname === '/catalog' ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                    >
                        Каталог
                    </Link>
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
