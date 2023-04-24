import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const Nav = styled.nav`
position: sticky;
    display: flex;
    background-color: #0C0C22;
    justify-content: space-between;
    align-items: center;
    color: #2e0c0c;
    height: 70px;
    padding: 1rem;

`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
`;


export const Menu = styled.div`
    display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuItem = styled(NavLink)`
margin-left: 20px;
  color: #fff;
  text-decoration: none;
  &.active {
    color: #8f1414;
  }
`;

export const ImgNavbar = styled.div`
height: 80%;
width: 40px;
flex-shrink: 0;
;`