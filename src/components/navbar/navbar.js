import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" className="brand-logo">Awesome Apps</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Todo App</Link></li>
                        <li><Link to="/reduxapp">Redux App</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;