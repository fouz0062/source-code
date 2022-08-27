import React from "react";
import "../../Reset-Container.css";
import "./TourListComp.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { SiTripadvisor } from "react-icons/si";
import { motion } from "framer-motion";
export const TourListComp = () => {
  return (
    <>
      <div className="tourlist-bg">
        <div className="container">
          <p>Discover a hidden paradise</p>
          <h4>our travels</h4>
          <motion.button
            whileHover={{
              borderBottom: "4px solid darkGreen",
              boxShadow: "2px 2px 5px darkGrey",
              y: "10px",
              scale: 1.1,
            }}
          >
            book now
          </motion.button>
        </div>
      </div>
      <div className="ourTours container">
        <h2>our tours</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          varius rhoncus nulla
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius
          rhoncus nulla Pellentesque varius rhoncus nulla Pellentesque varius
          rhoncus nulla varius rhoncus nulla
        </p>
      </div>
      <div className="categories">
        <div className="container">
          <motion.div
            whileHover={{
              backgroundColor: "darkGrey",
              color: "#fff",
              transition: { duration: 2 },
            }}
          >
            All categories
          </motion.div>
          <motion.div
            whileHover={{
              backgroundColor: "darkGrey",
              color: "#fff",
              transition: { duration: 2 },
            }}
          >
            Day-trips
          </motion.div>
          <motion.div
            whileHover={{
              backgroundColor: "darkGrey",
              color: "#fff",
              transition: { duration: 2 },
            }}
          >
            Multi-day trips
          </motion.div>
          <motion.div
            whileHover={{
              backgroundColor: "darkGrey",
              color: "#fff",
              transition: { duration: 2 },
            }}
          >
            private tours
          </motion.div>
        </div>
      </div>
      <div className="tlist">
        <div className="container">
          <div>
            <div>
              <img src="./image/home-background4.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>gardern of eden</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./image/single-bg1.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>Horseback Riding</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./image/home-gallary2-div1.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>Blue jwel mine</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./image/home-background.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>untouched paradise</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./image/dest-sky-bg.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>cloud forest mountain</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./image/tlist-flamingo.jpg" alt="" />
            </div>
            <div className="tlist-right">
              <div>
                <div>
                  <h3>flamingo island</h3>
                  <p>daytrip</p>
                  <p>departing from : barahona</p>
                  <p>
                    <AiOutlineClockCircle />
                    <span>5-6 hours</span>
                  </p>
                </div>
                <div className="tlist-price">
                  <button>$55</button>
                  <div>per adult</div>
                  <p>transportation included</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius rhoncus nulla
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nullaLorem ipsum dolor sit
                  amet,sectetur adipiscing elit. Pellentesque varius rhoncus
                  nullaLorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Pellentesque varius rhoncus nulla
                </p>
                <div>
                  <div>
                    <SiTripadvisor />
                  </div>
                  <div>
                    <p>
                      <AiOutlineInfoCircle />
                      <span>info</span>
                    </p>
                    <p>
                      <IoMdPhotos />
                      <span>photos</span>
                    </p>
                    <p>
                      <BiMap />
                      <span>map</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button> load more</button>
        </div>
      </div>
      <div className="tlist-featured container">
        <h2>Featured travel experience</h2>
        <div>
          <div className="tour-bg1">
            <motion.div whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              <h2>garden of eden</h2>
              <button>$55</button>
              <p>price per adult</p>
              <p>departing from: barahona</p>
              <p>
                <AiOutlineClockCircle /> <span>5-6 hours</span>
              </p>
            </motion.div>
          </div>
          <div className="tour-bg2">
            <motion.div whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              <h2>untouched paradise</h2>
              <button>$99</button>
            </motion.div>
          </div>
          <div className="tour-bg3">
            <motion.div whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
              <h2>cloud forest mountain</h2>
              <button>$105</button>
            </motion.div>
          </div>
        </div>
        <button className="tlist-btn">load more</button>
      </div>
    </>
  );
};
