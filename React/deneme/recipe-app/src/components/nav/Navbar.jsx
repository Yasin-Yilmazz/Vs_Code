import { Link } from "react-router-dom";
import React from "react";
import Nav, { Logo, Menu, MenuLink } from "./Navbar.style";
import StyledNavbar from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Yase/>"}</i>
        <span>Recipe</span>
      </Logo>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
