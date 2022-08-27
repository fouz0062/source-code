import React from "react";
import "../Reset-Container.css";
import "./Template.css";
import { Outlet } from "react-router-dom";
import { NavLin } from "../Component/Nav/NavLinks";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { useState } from "react";
import { Footer } from "../Component/Footer/Footer";

export const Template = () => {
  const [open, setOpen] = useState(false);

  const Close = (
    <FaRegWindowClose onClick={() => setOpen(!open)} className="icons" />
  );
  const Burger = (
    <GiHamburgerMenu onClick={() => setOpen(!open)} className="icons" />
  );
  const CloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex container">
        <div>{open ? Close : Burger}</div>
        <div className="Title">
          <span>
            <GiHighGrass />
          </span>
          <span className="strong">eco</span>tour<span>barahona</span>
        </div>
        <div className="TitleContact">
          <p>
            <span>
              <BsFillTelephoneFill />
            </span>
            Get In Touch
          </p>
        </div>
      </div>
      <div>
        {open && <NavLin className="nav" isOpen={true} CloseMenu={CloseMenu} />}
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
