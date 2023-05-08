import React, { useLayoutEffect, useRef } from "react";
import { ImgNavbar, Logo, Menu, MenuItem, Nav } from '../../styles/navBar';
import { NavLink } from 'react-router-dom';
import DockerLogo from "../../../assets/DockerLogo.png"


function NavBar() {
    const navbarRef = useRef(null);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const navbar = navbarRef.current;
            if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Nav ref={navbarRef}>
            <Logo to="/">DKR</Logo>
            <ImgNavbar src={DockerLogo} />

            <Menu>
                <MenuItem to="/" exact activeClassName="active">Home</MenuItem>
                <MenuItem to="/dockerhub" exact activeClassName="active">DockerHub</MenuItem>
                <MenuItem to="/sobre" exact activeClassName="active">Sobre</MenuItem>
            </Menu>
        </Nav >
    );
}

export default NavBar;