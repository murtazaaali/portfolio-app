import React from "react";
import "./styles/main.scss";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hello Everyone !</p>
            <h1>I am Ali Murtaza</h1>
            <p>Full-Stack Developer & Designer</p>
          </div>
          <div className="icons">
            <Twitter className="icon" />
            <Instagram className="icon" />
            <Facebook className="icon" />
            <LinkedIn className="icon" />
          </div>
          <div className="buttons">
            <button></button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="buttons"></div>
      </div>
    </div>
  );
};

export default Main;
