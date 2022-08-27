import React from "react";
import { Calender } from "../BookNow/BookNow";
import "../../Reset-Container.css";
import "./DestinationComp.css";

export const DestinationComp = () => {
  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/dest-bg1.jpg" + ")",
        // }}
        className="bg1"
      >
        <div className="container">
          <h2>one island - two faces</h2>
          <h2>hispaniola</h2>
        </div>
      </div>
      <div className="container carribean">
        <h2>carribean paradise</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          id ex quis metus cursus consequat ut eget felis.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="cr-grid">
        <div>
          <img src="./image/car-3.jpg" />
        </div>
        <div>
          <img src="./image/car-2.jpg" />
        </div>
        <div>
          <img src="./image/car-3.jpg" />
        </div>
      </div>
      <div className="geo container">
        <div>
          <h2>geography</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
            turpis massa, gravida ut neque vitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nullaitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
            turpis massa, gravida ut neque vitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
            turpis massa.
          </p>
        </div>
        <div>
          <img src="./image/map.png" alt="" />
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/boat-bg2.jpg" + ")",
        // }}
        className="bg2"
      >
        <div>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit. Pellentesque varius rhoncus
          <br /> nulla, vitae rhoncus massa. Quisque turpis massa.
        </div>
      </div>
      <div className="history container">
        <div>
          <h2>History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nullaitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nulla, vitae rhoncus massa. Quisque
            turpis massa, gravida ut neque vitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque varius rhoncus nullaitae, maximus consequat velit. In
            posuere in arcu pulvinar dictum.
          </p>
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: "url(" + "./image/dest-sky-bg.jpg" + ")",
        // }}
        className="background3 bg3"
      >
        <div className="container">
          <div className=" home3-content">
            <p>What to see an what to do!!</p>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                id ex quis metus cursus consequat Pellentesque id ex quis metus
                cursus consequat ut eget felis.
              </p>
              <p>
                ut eget felis. Ut rutrum vestibulum imperdiet. ut eget felis. Ut
                rutrum vestibulum imperdiet.
              </p>
            </div>
            <div>
              <button>Show all our tours More</button>
            </div>
          </div>
          <img src="./image/maldives.jpg" alt="parrot" className="home3-img " />
        </div>
      </div>
      <Calender />
    </>
  );
};
