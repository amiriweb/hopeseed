// src/components/NavBar.js
import React from "react";
import Logo from "../Logos/Logo";
import Button from "../Buttons/Button";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Logo />
      </div>
      <div className="navbar__right">
        <Button
          label="Please wait at least 4 seconds"
          className="navbar__button"
        />
      </div>
    </nav>
  );
};

export default NavBar;
