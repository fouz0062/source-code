import { FaMugHot } from "react-icons/fa";
import { BiCheckboxChecked } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

function Team() {
  return (
    <>
      <div
        className="team--background"
        style={{
          backgroundImage: "url(" + "./image/team-background.jpg" + ")",
        }}
      >
        <div className="container">
          <div className="team">
            <h2 className="team--title">OUR Team</h2>
            <p className="team--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="team--grid">
            <div>
              <img src="./image/team-img1.jpg" alt="" />
              <div>
                <div></div>
                <h4>Web developer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus.
                </p>
              </div>
            </div>
            <div>
              <img src="./image/team-img2.jpg" alt="" />
              <div>
                <div></div>
                <h4>Web designer</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus.
                </p>
              </div>
            </div>
            <div>
              <img src="./image/team-img3.jpg" alt="" />
              <div>
                <div></div>
                <h4>SEO Expert</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus.
                </p>
              </div>
            </div>
            <div>
              <img src="./image/team-img4.jpg" alt="" />
              <div>
                <div></div>
                <h4>researcher</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team--color">
        <div className="container team--flex1">
          <div>
            <FaMugHot />
            <span>
              3214+
              <p>Cups of Tea consumed</p>
            </span>
          </div>
          <div>
            <BiCheckboxChecked />
            <span>
              657
              <p>Project Completed</p>
            </span>
          </div>
          <div>
            <BsPerson />
            <span>
              213
              <p>Clients worked with</p>
            </span>
          </div>
          <div>
            <FaTrophy />
            <span>
              99
              <p>Award Won</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
