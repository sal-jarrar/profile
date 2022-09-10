import React from "react";

const NavItem = ({ name, href, className }) => {
  return (
    <li className={className}>
      <a href={href} className="nav-link">
        {name}
      </a>
    </li>
  );
};

export default NavItem;
