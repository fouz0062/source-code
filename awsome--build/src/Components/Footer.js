import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { BsQuestionDiamond } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer--bg">
        <div className=" footer--bg--flex container">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaGooglePlusG />
          </div>
        </div>
      </div>

      <div className="footer2">
        <BsQuestionDiamond /> Awesome <span>2020</span>
      </div>
    </>
  );
}

export default Footer;
