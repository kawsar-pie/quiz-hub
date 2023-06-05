import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log("signed out")
            })
            .catch(err => console.log(err.message));
    }
    return (
        <div className='header px-2 py-5'>
            <div className='quiz-hub font-bold text-3xl'>
                <NavLink to='/'><h1 style={{ color: "#71ef95" }}>Quiz <span className='hub'>Hub</span></h1></NavLink>
            </div>
            <div className='routes'>
                <p><NavLink to='/home' className={({ isActive }) =>
                    isActive ? "active" : ""}>Home</NavLink></p>
                <p><NavLink to='/analytics' className={({ isActive }) =>
                    isActive ? "active" : ""}>Analytics</NavLink></p>
                <p><NavLink to='/blog' className={({ isActive }) =>
                    isActive ? "active" : ""}>Blog</NavLink></p>
                {
                    user?.uid ?
                        <p><Link onClick={handleSignOut}>Logout</Link></p>
                        : <><p><NavLink to='/register' className={({ isActive }) =>
                            isActive ? "active" : ""}>Register</NavLink></p>
                            <p><NavLink to='/login' className={({ isActive }) =>
                                isActive ? "active" : ""}>Login</NavLink></p>
                        </>
                }
                {user?.email && <span className='user-name mr-8'>Hi, Mr. {user?.displayName?.split(" ")[0]} </span>}
            </div>
        </div>
    );
};

export default Header;