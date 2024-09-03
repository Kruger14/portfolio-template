import React from 'react';
import './styles/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link className='link' to='/'>
                <div className="navbar-item">
                    <img alt="user-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👤" className="navbar-icon" />
                    <span>About</span>
                </div>
            </Link>

            <Link className='link' to='/resume'>
                <div className="navbar-item">
                    <img alt="resume-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📄" className="navbar-icon" />
                    <span>Resume</span>
                </div>
            </Link>

            <Link className='link' to='/works'>
                <div className="navbar-item">
                    <img alt="works-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💼" className="navbar-icon" />
                    <span>Works</span>
                </div>
            </Link>

            <Link className='link' to='/contact'>
                <div className="navbar-item">
                    <img alt="contact-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📇" className="navbar-icon" />
                    <span>Contact</span>
                </div>
            </Link>
        </div>
    );
}

export default Navbar;
