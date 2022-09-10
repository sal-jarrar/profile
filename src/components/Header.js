import React, { useState } from "react";

const Header = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => setStatus(!status);
  const rotate = status ? "close" : "";
  return (
    <header>
      <div onClick={toggle} className={`menu-btn ${rotate}`}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
