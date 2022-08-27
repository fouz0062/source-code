import React from "react";
import "../../Reset-Container.css";
import "./SingleTourComp.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";
import { MdWaves } from "react-icons/md";
import { BsFlag } from "react-icons/bs";
import { motion } from "framer-motion";
export const SingleTourComp = () => {
  const from = { y: "100vh" };
  const to = { y: 0 };
  const btn = {
    y: "10px",
    boxShadow: "2px 2px 8px black",
  };
  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/single-bg1.jpg" + ")",
        // }}
        className="single-bg"
      >
        <motion.div
          initial={from}
          animate={to}
          transition={{
            delay: 0.8,
            duration: 1.5,
          }}
          className="container"
        >
          <p>half day</p>
          <h2>horseback riding</h2>
          <motion.button whileHover={btn}>book now</motion.button>
        </motion.div>
      </div>
      <div className="single-map container">
        <h2>horseback to the mountains of paraiso</h2>
        <div className="single--title">
          <div>highlights</div>
          <div>description</div>
          <div>gallery</div>
        </div>
        <div className="single-map-description">
          <div>
            <h4>
              Route : <span>barahona-paraiso</span>
            </h4>
            <div>
              <p>
                <AiOutlineClockCircle />
                <span>horseback riding/duration 3-4 hrs</span>
              </p>
              <p>
                <GoLocation />
                <span>departing from barahona</span>
              </p>
              <p>
                <AiOutlineCamera />
                <span>panoramic view over the carribean sea</span>
              </p>
              <p>
                <MdWaves />
                <span>Ride through a river</span>
              </p>
              <p>
                <BsFlag />
                <span>stop at the paprika green house</span>
              </p>
            </div>
            <div className="highlights-price">
              <button>$60</button>
              <span>per adult</span>
              <p>guaranteed departure from 2 adults on</p>
            </div>
          </div>
          <div>
            <img src="./image/map2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="slider container">
        <figure>
          <img src="./image/traval1.jpg" alt="" />
          <img src="./image/traval2.jpg" alt="" />
          <img src="./image/traval3.jpg" alt="" />
          <img src="./image/traval4.jpg" alt="" />
          <img src="./image/traval5.jpg" alt="" />
        </figure>
      </div>
      <button className="bn-btn">book now</button>
    </>
  );
};
