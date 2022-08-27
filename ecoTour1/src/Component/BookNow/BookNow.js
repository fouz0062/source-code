import React from "react";
import { ImCalendar } from "react-icons/im";
import "./BookNow.css";
import { motion } from "framer-motion";

export const Calender = () => {
  return (
    <>
      <div className="calendar">
        <div className="container calendar--flex">
          <div>
            <ImCalendar />
            <span>
              book now
              <p> Lorem ipsum dolor sit amet</p>
            </span>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.5 }}>
              Check the dates
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};
