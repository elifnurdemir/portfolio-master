import React, { useState, useEffect } from 'react';
import '../../assets/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import arrivederciao from '../../assets/media/arrivederciao.png';

const Navbar = ({ title }) => {
    const navigate = useNavigate();
    const location = useLocation();




    const NavbarItem = ({ itemTitle, targetPath, navbarItemImage }) => {
        const isActive = location.pathname === targetPath;

        const handleItemClick = () => {
            navigate(targetPath);
        };

        return (
            <div className={`navbar-item ${isActive ? 'navbar-item-active' : ''}`} onClick={handleItemClick}>
                {navbarItemImage && <img className="navbar-item-image" src={navbarItemImage} alt="icon" />}
                {itemTitle}
            </div>
        );
    };

    return (
        <div className={`navbar-container`}>
            <div className="navbar-left">
                <div className="navbar-logo-wrapper">
                    <img className="navbar-logo" src={arrivederciao} alt="logo" />
                </div>
            </div>
            <div className="navbar-center">
                <NavbarItem itemTitle={"Home"} targetPath="/home" />
                <NavbarItem itemTitle={"Blog"} targetPath="/blog" />
                <NavbarItem itemTitle={"Projects"} targetPath="/projects" />
                <NavbarItem itemTitle={"Contact"} targetPath="/contact" />
            </div>
        </div>
    );
};

export default Navbar;
