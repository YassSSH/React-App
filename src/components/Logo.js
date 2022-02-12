import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to="/" className="logo">
        <img src="./logo192.png" alt="logo" />     
        <h3>React World</h3>       
        </NavLink>
    );
};

export default Logo;