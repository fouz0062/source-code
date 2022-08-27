import React from "react";
import { Calender } from "../BookNow/BookNow";
import "../../Reset-Container.css";
import "./PrivateTourComp.css";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdTouchApp } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";
import { FaQuoteRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { motion } from "framer-motion";

export const PrivateTourComp = () => {
  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/pvt-bg1.jpg" + ")",
        // }}
        className="pvt-bg1"
      >
        <div className="container">
          <h2>
            Receive vip treatment
            <p>private trips</p>
          </h2>
        </div>
      </div>
      <div className="container pvt-content1">
        <h2>privatize any of our day trips</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          varius rhoncus nulla, vitae rhoncus massa. Quisque turpis massa,
          gravida ut neque vitae, maximus consequat velit. In posuere in arcu
          pulvinar dictum.
        </p>
        <div>
          <div>
            <h2>tailor made trips</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
              turpis massa, gravida ut neque vitae, maximus consequat velit. In
              posuere in arcu pulvinar dictum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
              turpis massa, gravida ut neque vitae, maximus consequat velit. In
              posuere in arcu pulvinar dictum.
            </p>
          </div>
          <div>
            <h2>groups</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
              turpis massa, gravida ut neque vitae, maximus consequat velit. In
              posuere in arcu pulvinar dictum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
              turpis massa, gravida ut neque vitae, maximus consequat velit. In
              posuere in arcu pulvinar dictum.
            </p>
          </div>
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/pvt-bg2.jpg" + ")",
        // }}
        className="pvt-bg2"
      >
        <div className="container">
          <h2>let's get started</h2>
          <div>
            <div>
              <GiMagnifyingGlass />
              <p>select your travel experience</p>
            </div>
            <div>
              <MdTouchApp />
              <p>Choose a departure date</p>
            </div>
            <div>
              <BsFillPhoneVibrateFill />
              <p>call us to book your trip</p>
            </div>
            <motion.button
              whileHover={{
                width: "100%",
                left: 0,
                transition: {
                  duration: 2,
                },
              }}
            >
              get started
            </motion.button>
          </div>
        </div>
      </div>
      <div className="container pvt-inspired">
        <h2>Get inspired</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          varius rhoncus nulla.
        </p>
        <div>
          <div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval1.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque varius rhoncus nulla.
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval2.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
            </div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval3.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval4.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
            </div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval5.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
            </div>
            <div
              style={{
                backgroundImage: "url(" + "./image/traval6.jpg" + ")",
              }}
            >
              <h2>Lorem ipsum dolor sit</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pvt-grey">
        <div className="container">
          <div>
            <h2>Our guides and local experts</h2>
            <div>
              <img src="./image/pvt-prof1.jpg" alt="" />
              <img src="./image/pvt-prof2.jpg" alt="" />
              <img src="./image/pvt-prof3.jpg" alt="" />
              <img src="./image/pvt-prof3.jpg" alt="" />
              <img src="./image/pvt-prof2.jpg" alt="" />
              <img src="./image/pvt-prof1.jpg" alt="" />
            </div>
            <button>meet our guides</button>
          </div>
          <div>
            <div>
              <div>
                <FaQuoteRight />
                <p>fantastic experience</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque varius rhoncus nulla, vitae rhoncus massa.
                  Quisque turpis massa, gravida ut neque vitae,...More
                </p>
                <p className="nme">Samg</p>
              </div>
              <div>
                <SiTripadvisor />
                <span>
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                </span>
                <span className="span2">reveiwed 1 week ago</span>
              </div>
            </div>
            <div className="guides-div3">
              <div>
                <SiTripadvisor />
                <h4>tripadvisor</h4>
              </div>
              <div>
                Ecotour barahona
                <p>
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <GoPrimitiveDot />
                  <span>50 reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Calender />
    </>
  );
};
