import { FaRegThumbsUp } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
function Feature() {
  return (
    <>
      <div className="feature--background">
        <div className="container">
          <div className="feature--title">
            <h2>Feature</h2>
          </div>
          <div className="feature--grid">
            <div>
              <div className="feature--grid--hexagon">
                <FaRegThumbsUp />
              </div>
              <h3>Elegant</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
            <div>
              <div className="feature--grid--hexagon">
                <FaLaptop />
              </div>
              <h3>Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
            <div>
              <div className="feature--grid--hexagon">
                <FaGift />
              </div>
              <h3>Modern</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
