import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import { Socialicons } from "../components/socialicons";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link  onClick={handleToggle} to="/" className="my-3">Accueil</Link>
                    <hr className="headerHr t_border my-4 ml-0 text-left" />
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3">Portfolio</Link>
                    <hr className="headerHr t_border my-4 ml-0 text-left" />
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/a-propos" className="my-3">À propos</Link>
                    <hr className="headerHr t_border my-4 ml-0 text-left" />
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">Contact</Link>
                  </li>
                </ul>
                <Socialicons/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      
    </>
  );
};

export default Headermain;
