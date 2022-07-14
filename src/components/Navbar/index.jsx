import React, { useState } from "react";
import "../Navbar/styles.css";
import { MdClose, MdMenu } from "react-icons/md";
import Navmenus from "./Navmenus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main__nav">
      <div className="nav__container">
        <div className="logo">
          <a href="/">
            <img src="/assets/logo.svg" alt="hoppin" />
          </a>
        </div>

        <div className={`nav__menus ${isOpen ? "mobile_menu" : ""}`}>
          <Navmenus />
          <ul className="menu menu2">
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Request demo</a>
            </li>
          </ul>
        </div>
        <div className="toggle__button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
