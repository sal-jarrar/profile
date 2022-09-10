import React from "react";

const NavItem = ({ name, href, className, setRoute }) => {
  return (
    <li className={className} onClick={() => setRoute(href)}>
      <a href={href} className="nav-link">
        {name}
      </a>
    </li>
  );
};

export default NavItem;
