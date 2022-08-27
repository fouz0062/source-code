import React from "react";
import "./NavLink.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../../Reset-Container.css";
import { motion } from "framer-motion";
export const NavLin = (props) => {
  const From = { opacity: 0, y: -40 };
  const To = { opacity: 1, y: 0 };
  return (
    <>
      <div className="container list-items">
        <ul>
          <motion.li
            initial={From}
            animate={To}
            transition={{ delay: 0.05 }}
            onClick={() => props.isOpen && props.CloseMenu()}
          >
            <NavLink to="/">Home</NavLink>
          </motion.li>
          <motion.li
            initial={From}
            animate={To}
            transition={{ delay: 0.15 }}
            onClick={() => props.isOpen && props.CloseMenu()}
          >
            <NavLink to="/Destination">Destination</NavLink>
          </motion.li>
          <motion.li
            initial={From}
            animate={To}
            transition={{ delay: 0.25 }}
            onClick={() => props.isOpen && props.CloseMenu()}
          >
            <NavLink to="/PrivateTour">Private Tour</NavLink>
          </motion.li>
          <motion.li
            initial={From}
            animate={To}
            transition={{ delay: 0.35 }}
            onClick={() => props.isOpen && props.CloseMenu()}
          >
            <NavLink to="/SingleTour">Single Tour</NavLink>
          </motion.li>
          <motion.li
            initial={From}
            animate={To}
            transition={{ delay: 0.45 }}
            onClick={() => props.isOpen && props.CloseMenu()}
          >
            <NavLink to="/TourList">Tour List</NavLink>
          </motion.li>
        </ul>
      </div>
    </>
  );
};
