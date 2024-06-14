import React from "react";
import "./navbar.scss";
import Navbar from 'react-bootstrap/Navbar';

export const Navbar = () => {

    return (
        <Navbar className="navbar">
            <span style={{marginLeft: '20px'}}>Taiwan Taste Tiles</span>
        </Navbar>
    );
};
