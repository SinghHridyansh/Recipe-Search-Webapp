import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { scale: !menuOpened && "0" };
    }
  };
  return (
    <div className="NavBar">
      <h1 style={{ color: "black" }}>
        <Link to="/">Recipe Book</Link>
      </h1>

      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}
      >
        <ul className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page2">Search</Link>
          </li>
          <li>About Us</li>

          <li>Contact Us</li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
        </ul>
      </OutsideClickHandler>
      <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={40} color={"white"} />
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
