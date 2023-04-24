import React from 'react';
import { Logo, Menu, MenuItem, Nav } from '../../styles/navBar';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <Nav>
            <Logo to="/">Logoo</Logo>
            <img src="" alt="#" />
            <Menu>
                <MenuItem to="/" exact activeClassName="active">Home</MenuItem>
                <MenuItem  to="/dockerhub" exact activeClassName="active">DockerHub</MenuItem>
                <MenuItem to="/sobre" exact activeClassName="active">Sobre</MenuItem>
            </Menu>
        </Nav>
    );
}

export default NavBar;