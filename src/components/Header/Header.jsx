import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='quiz-hub'>
                <NavLink to='/'><h2>Quiz <span className='hub'>Hub</span></h2></NavLink>
            </div>
            <div className='routes d-flex justify-content-between'>
                <p><NavLink to='/' className={({ isActive }) =>
                    isActive ? "active" : ""}>Home</NavLink></p>
                <p><NavLink to='/analytics' className={({ isActive }) =>
                    isActive ? "active" : ""}>Analytics</NavLink></p>
                <p><NavLink to='/blog' className={({ isActive }) =>
                    isActive ? "active" : ""}>Blog</NavLink></p>
                <p><NavLink to='/about' className={({ isActive }) =>
                    isActive ? "active" : ""}>About</NavLink></p>
            </div>
        </div>
    );
};

export default Header;