import React from "react";
import "./Footer.css";
import "../../Reset-Container.css";
import { GiHighGrass } from "react-icons/gi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="bgcolor">
        <div className="container footer-grid">
          <div>
            <div>
              <h2>
                <GiHighGrass />
                <span>
                  <span>eco</span>tour<span>barahona</span>
                </span>
              </h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id ex quis metus cursus consequat ut eget felis.
              </div>
              <div>
                Dominic Republic
                <p>has it all</p>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id ex quis metus cursus consequat ut eget felis.
              </div>
            </div>
          </div>
          <div>
            <h2>About us</h2>
            <p>about ecotour</p>
            <p>barahona</p>
            <p>our team</p>
            <p>guestbook</p>
            <p>imprint</p>
          </div>
          <div>
            <h2>Customer Service</h2>
            <p>Booking Conditions</p>
            <p>contact us</p>
            <p>Faq's</p>
            <p>legal notice</p>
            <p>privacy policy</p>
          </div>
          <div>
            <h2>Reservations & booking</h2>
            <p>
              Mon-Fri
              <p>From 8:00 am to 8:00 pm</p>
            </p>
            <p>
              Sat-sun
              <p>From 9:00 am to 5:00 pm</p>
            </p>
            <p>
              Atlantic standard time
              <p>+1 (809) 123 4567</p>
            </p>
          </div>
          <div>
            <h2>Follow us</h2>
            <p>
              <span>
                <FiFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <FaTripadvisor />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
