import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { RiFlaskFill } from "react-icons/ri";
import { BsWordpress } from "react-icons/bs";
class Service extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="service">
            <h2 className="service--title">Service</h2>
            <p className="service--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="service--grid">
            <div>
              <div>
                <BsPencilFill className="service--icon" />
              </div>
              <h3>Web development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
            <div>
              <div>
                <RiFlaskFill className="service--icon" />
              </div>
              <h3>Web design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
            <div>
              <div>
                <BsWordpress className="service--icon" />
              </div>
              <h3>Wordpress ready</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
