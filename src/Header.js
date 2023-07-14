import React, { useState } from "react";
import "./styles/Header.scss";
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="Header">
      <div className="Header__logo">
        <h1>ALI MURTAZA</h1>
      </div>
      <nav className="navbar">
        <ul>
          <div className="Closed">
            <Close className="close" onclick={showMenu} />
          </div>
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/">
              {" "}
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link to="/">
              {" "}
              <b>Portfolio</b>
            </Link>
          </li>
          <li>
            <Link to="/">
              <b>Blog</b>{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <b>Contact</b>{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="changer">
        <MenuBookOutlined className="menu" onclick={showMenu} />
      </div>
    </div>
  );
};
export default Header;
