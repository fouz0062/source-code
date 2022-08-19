import { AiOutlineMobile } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";

function Core() {
  return (
    <>
      <div
        className="core--background"
        style={{
          backgroundImage: "url(" + "./image/core-background.jpg" + ")",
        }}
      >
        <div className="container">
          <div className="core--title">
            <h2> Core fearure</h2>
          </div>
          <div className="core--grid">
            <div>
              <div>
                <div>
                  <AiOutlineMobile />
                </div>
                <div>
                  <h4>Attractive Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec a eros eget nisl sagittis commodo non dignissim purus.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <BsFillGearFill />
                </div>
                <div>
                  <h4>Responsive Layout</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec a eros eget nisl sagittis commodo non dignissim purus.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <AiOutlineFile />
                </div>
                <div>
                  <h4>Expensive Documentation</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec a eros eget nisl sagittis commodo non dignissim purus.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="./image/core-mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Core;
