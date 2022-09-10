import React, { useState } from "react";
import { getNavItems } from "../constant/constants";
import NavItem from "./NavItem";

const Header = ({ status, toggle }) => {
  const [route, setRoute] = useState("home");
  const rotate = status ? "close" : "";
  const show = status ? "show" : "";
  const navItems = getNavItems(route, show);
  return (
    <header>
      <div onClick={toggle} className={`menu-btn ${rotate}`}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={`menu ${show}`}>
        <div className={`menu-branding ${show}`}>
          <div className="portrait"></div>
        </div>
        <ul className={`menu-nav ${show}`}>
          {navItems.map((navItem) => (
            <NavItem key={navItem.id} {...navItem} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
