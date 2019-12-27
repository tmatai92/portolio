import React, { useState } from 'react';
import { Router, NavLink } from "react-router-dom"

const Header = () => {

    return (
        <div>
         <NavLink exact activeStyle={{
                backgroundColor: 'white',
                color: 'red'
            }} to="/" className="Home">Home</NavLink>
            <NavLink exact activeStyle={{
                backgroundColor: 'white',
                color: 'red'
            }} to="/about" className="Home">Project</NavLink>
        </div>
    );
}

export default Header;