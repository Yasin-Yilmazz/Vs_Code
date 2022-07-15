import React from "react";
import Nav, { ALink, Hamburger, Logo, Menu, MenuLink } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<Yase/>"}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger>
        <GiHamburgerMenu onClick={() => setIsHamburger(!isHamburger)} />
      </Hamburger>

      <Menu isHamburger={isHamburger} onclick={() => setIsHamburger(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <ALink href="https://github.com/Yasin-Yilmazz" target="_blank">
          Github
        </ALink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
