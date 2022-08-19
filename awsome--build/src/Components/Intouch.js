import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineSkype } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
function Touch() {
  return (
    <>
      <div className="touch--background">
        <div className="container">
          <div className="touch--title">
            <h2>get in touch</h2>
          </div>
          <div className="conatiner touch--flex">
            <div>
              <div className="touch--flex--location">
                <GoLocation />
              </div>
              <div>
                address
                <p>Inner Circular road, broker sector rang plaza,UK.</p>
              </div>
            </div>
            <div>
              <div className="touch--flex--mail">
                <FiMail />
              </div>
              <div>
                email
                <p>
                  Support@yoursite.com
                  <br />
                  info@yoursite.com
                </p>
              </div>
            </div>
            <div>
              <div className="touch--flex--phone">
                <BsFillPhoneVibrateFill />
              </div>
              <div>
                phone
                <p>
                  +61(001) 2345 67890 <br />
                  +61(001) 2345 67890
                </p>
              </div>
            </div>
            <div>
              <div className="touch--flex--skype">
                <AiOutlineSkype />
              </div>
              <div>
                skype
                <p>
                  support.awesome@skype.com <br />
                  help.awesome@skype.com
                </p>
              </div>
            </div>
          </div>
          <div className="touch--flex--input">
            <input
              type="text"
              placeholder="Enter email address here to subscribe our news letter"
            />
            <a href="">
              <button className="touch--flex--button">
                subscribe <BiPaperPlane className="plane" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084411.009087043!2d30.058573137822403!3d1.367105693447766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x874155ce43014549!2sUganda!5e0!3m2!1sen!2sdk!4v1660855411520!5m2!1sen!2sdk"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="touch--flex--iframe"
      ></iframe>
    </>
  );
}

export default Touch;
