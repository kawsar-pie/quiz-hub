import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='quiz-hub'>
                <NavLink to='/'><h1 style={{color:"#71ef95"}}>Quiz <span className='hub'>Hub</span></h1></NavLink>
            </div>
            <div className='routes'>
                <p><NavLink to='/home' className={({ isActive }) =>
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