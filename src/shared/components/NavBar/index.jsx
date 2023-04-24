import React from 'react';
import { ImgNavbar, Logo, Menu, MenuItem, Nav } from '../../styles/navBar';
import { NavLink } from 'react-router-dom';
import DockerLogo from "../../../assets/DockerLogo.png"



function NavBar() {
    return (
        <Nav>
            <Logo to="/">Logoo</Logo>
            <ImgNavbar src={DockerLogo} alt="dockerlogo" />

            <Menu>
                <MenuItem to="/" exact activeClassName="active">Home</MenuItem>
                <MenuItem to="/dockerhub" exact activeClassName="active">DockerHub</MenuItem>
                <MenuItem to="/sobre" exact activeClassName="active">Sobre</MenuItem>
            </Menu>
        </Nav >
    );
}

export default NavBar;