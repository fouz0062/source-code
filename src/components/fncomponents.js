import React from "react";
import BioCSS from "./biodata.module.css";
import exp from "./exp.module.css";
import footer from "./footer.module.css";
function Bio() {
  return (
    <div className={BioCSS.container}>
      <div className={BioCSS.grid}>
        <div>
          <img src="./image/profile.jpg" alt="" className={BioCSS.image} />
        </div>
        <div className={BioCSS.right}>
          <h2>Hi Guys!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
            eleifend neque. Morbi turpis enim, varius eu nisi ullamcorper,
            porttitor condimentum ligula. Donec at facilisis velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Morbi nec sodales
            augue. Nam rutrum venenatis ante, ut convallis justo dapibus eget.
          </p>
          <div>
            <p>Name</p>
            <p>Fouziya</p>
            <p>Experience</p>
            <p>XXX</p>
            <p>Country</p>
            <p>Denmark</p>
            <p>Location</p>
            <p>Copenhagen</p>
            <p>e-mail</p>
            <p>fouzifathii@gmail.com</p>
            <p>Phone</p>
            <p>+45 52818271</p>
          </div>
          <div className={BioCSS.btns}>
            <div>
              <button>
                <a href=".">
                  <i class="fa-solid fa-paperclip"></i>Resume
                </a>
              </button>
            </div>

            <div>
              <button>
                <a href="mailto:fouzifathii@gmail.com">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className={exp.flex}>
      <div>
        <h3>Education</h3>
        <div>
          <h5>MBA</h5>
          <p>Year</p>
          <p>Description goes here....</p>
        </div>
        <div>
          <h5>B.sc</h5>
          <p>Year</p>
          <p>Description goes here....</p>
        </div>
        <div>
          <h5>Higher Secondary/SSLC</h5>
          <p>Year</p>
          <p>Description goes here....</p>
        </div>
      </div>

      <div>
        <h3>Experience</h3>
        <div>
          <h5>Project 1</h5>
          <p>Date</p>
          <p>Description goes here....</p>
        </div>
        <div>
          <h5>Project 2</h5>
          <p>Date</p>
          <p>Description goes here....</p>
        </div>
        <div>
          <h5>Project 2</h5>
          <p>Date</p>
          <p>Description goes here....</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={footer.title}>
      <div>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
      @Copyrights || 2022. All Rights Reserved
    </div>
  );
}
export default Bio;
export { Experience, Footer };
// function WhoAmI(props) {
//   return (
//     <>
//       <p>New line</p>
//       <p>Name: {props.name}</p>
//       <p>Subject: {props.sub}</p>
//     </>
//   );
// }

// export default WhoAmI;
// export { Student1 };
