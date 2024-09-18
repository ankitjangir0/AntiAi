import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import hpic from './Pages/Images/home.png';
import prpic from './Pages/Images/protec.png';
import ppic from './Pages/Images/product.jpg';
import spic from './Pages/Images/setting.png';
import sopic from './Pages/Images/sign-out.png';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Anti-Ai</h1>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`nav ${isOpen ? 'open' : ''}`}>
                <h2><NavLink to={"/home"}> <img src={hpic} alt="Home" /> Home</NavLink></h2>
                <h2><NavLink to={"/protection"}> <img src={prpic} alt="Protection" /> Protection</NavLink></h2>
                <h2><NavLink to={"/product"}> <img src={ppic} alt="Product" /> Product</NavLink></h2>
              <div className="navlast">
              <h2><NavLink to={"/settings"}> <img src={spic} alt="Settings" /> Settings</NavLink></h2>
              <h2><NavLink to={"/signout"}> <img src={sopic} alt="Sign-out" /> Sign-out</NavLink></h2>
              </div>
            </div>
           
        </div>
    );
}

export default NavBar;
