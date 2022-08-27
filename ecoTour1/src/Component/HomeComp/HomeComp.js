import React from "react";
import "./HomeComp.css";
import "../../Reset-Container.css";
import { motion } from "framer-motion";
import { GiSchoolBag } from "react-icons/gi";
import { GiRollingSuitcase } from "react-icons/gi";
import { GiCaravan } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSteampunkGoggles } from "react-icons/gi";
import { DiYeoman } from "react-icons/di";
import { GiAchievement } from "react-icons/gi";
import { ImQuotesRight } from "react-icons/im";
import { Calender } from "../BookNow/BookNow";

export const HomeComp = () => {
  const from = { y: "100%" };
  const to = { y: 0 };
  return (
    <div className="home-bdy">
      <div
        className="background"
        // style={{
        //   backgroundImage: "url(" + "./image/home-background.jpg" + ")",
        // }}
      >
        <motion.div
          initial={from}
          animate={to}
          transition={{
            delay: 0.5,
            y: { duration: 2 },
            default: { ease: "ease" },
          }}
          className="background-content container"
        >
          <h3>Discover a hidden paradise</h3>
          <h2>deep south west</h2>
          <h2>domnican republic</h2>
          <motion.button
            whileHover={{
              scale: 1.2,
              backgroundColor: "brown",
            }}
          >
            <a href="">Book Now</a>
          </motion.button>
        </motion.div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/home-background2.png" + ")",
        // }}
        className="background2"
      >
        <div className="container home-flex2">
          <div>
            <GiSchoolBag className="home2-icons" />
            <motion.h4
              whileHover={{
                scale: 1.2,
              }}
            >
              day-trips
            </motion.h4>
          </div>
          <div>
            <GiRollingSuitcase className="home2-icons" />
            <motion.h4
              whileHover={{
                scale: 1.2,
              }}
            >
              multi-day trips
            </motion.h4>
          </div>
          <div>
            <GiCaravan className="home2-icons" />
            <motion.h4
              whileHover={{
                scale: 1.2,
              }}
            >
              private Tours
            </motion.h4>
          </div>
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/home-background3.jpg" + ")",
        // }}
        className="background3"
      >
        <div className="container">
          <div className=" home3-content">
            <p>Welcome to the deep</p>
            <p>southwest</p>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id ex quis metus cursus consequat ut eget felis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id ex quis metus cursus consequat ut eget felis. Ut
                rutrum vestibulum imperdiet.
              </p>
            </div>
            <div>
              <button>Know More</button>
            </div>
          </div>
          <img
            src="./image/home-content3.jpg"
            alt="parrot"
            className="home3-img "
          />
        </div>
      </div>
      <div className="background4">
        <h2>Featured Travel Experiences</h2>
        <div className="container home-flex4">
          <div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary1-div1.jpg" + ")",
              }}
            >
              <h3>Horseback Riding</h3>
              <button>$60</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary2-div1.jpg" + ")",
              }}
            >
              <h3>Blue Jewel Mine</h3>
              <button>$99</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary3-div1.jpg" + ")",
              }}
            >
              <h3>Garden of Eden</h3>
              <button>$55</button>
              <div>
                <p>price per Adult</p>
                <p>departing from:barahona</p>
                <p>
                  <AiOutlineClockCircle /> <span>5-6 hours</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary1-div2.jpg" + ")",
              }}
            >
              <h3>Untouched paradise</h3>
              <button>$99</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary2-div2.jpg" + ")",
              }}
            >
              <h3>Flamingo island</h3>
              <button>$105</button>
            </div>
          </div>

          <div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary1-div3.jpg" + ")",
              }}
            >
              <h3>Cloud Forest Mountain</h3>
              <button>$105</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary3-div3.jpg" + ")",
              }}
            >
              <h3>Lake Enriquillo</h3>
              <button>$110</button>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(" + "./image/home-gallary2-div3.jpg" + ")",
              }}
            >
              <h3>bahia de las aguilas & Larimar</h3>
              <button>$295</button>
            </div>
          </div>
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/home-background4.jpg" + ")",
        // }}
        className="background5"
      >
        <h2>why book with eco tour barahona</h2>
        <div className="container">
          <div>
            <GiSteampunkGoggles className="bg4-icons" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <DiYeoman className="bg4-icons" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id ex quis metus cursus consequat ut eget felis.
            </p>
          </div>
          <div>
            <GiAchievement className="bg4-icons" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="home-booknow container">
        <div>
          Lorem ipsum dolor sit amet
          <button>See All opinions</button>
        </div>
        <div>
          <img src="./image/profile-icon1.jpg" alt="" />
          <p>Lucia johnson</p>
          <div>
            <div>
              <ImQuotesRight />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id ex quis metus cursus consequat ut eget felis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Calender />
    </div>
  );
};
