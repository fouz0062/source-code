import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <div className="port">
          <h2 className="port--title">portfolio</h2>
          <p className="port--para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            eros eget nisl sagittis commodo non dignissim purus. Aliquam rhoncus
            tristique est, eu tempor ex. Nullam ac facilisis eros.
          </p>
        </div>
        <div className="port--flex">
          <a href="">
            <button className="port--btn--active">All</button>
          </a>
          <a href="">
            <button className="port--btn">Illustrator</button>
          </a>
          <a href="">
            <button className="port--btn">Ux/Ui design</button>
          </a>
          <a href="">
            <button className="port--btn">Video</button>
          </a>
          <a href="">
            <button className="port--btn">Web design</button>
          </a>
        </div>
        <div className="port--grid">
          <img src="./image/port-img1.jpg" alt="" />
          <img src="./image/port-img2.jpg" alt="" />
          <img src="./image/port-img3.jpg" alt="" />
          <img src="./image/port-img4.jpg" alt="" />
          <img src="./image/port-img5.jpg" alt="" />
          <img src="./image/port-img6.jpg" alt="" />
          <img src="./image/port-img7.jpg" alt="" />
          <img src="./image/port-img8.jpg" alt="" />
        </div>
      </>
    );
  }
}

export default Portfolio;
