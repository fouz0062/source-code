import React from "react";
import header from "./header.module.css";
import wdid from "./wdid.module.css";
import wrks from "./works.module.css";

class Title extends React.Component {
  render() {
    return (
      <div>
        <div className={header.title}>Fouziya</div>
      </div>
    );
  }
}

class WhatDoIDo extends React.Component {
  render() {
    return (
      <div className={wdid.title}>
        <h2>What I DO</h2>

        <div className={wdid.flex}>
          <div>
            <h4>Web Development</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              eleifend neque.
            </p>
          </div>

          <div>
            <h4>Web Development</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              eleifend neque.
            </p>
          </div>

          <div>
            <h4>Web Development</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              eleifend neque.
            </p>
          </div>

          <div>
            <h4>Web Development</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              eleifend neque.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Works extends React.Component {
  render() {
    return (
      <div className={wrks.title}>
        <h2>Works</h2>
        <div className={wrks.grid}>
          <div>
            <img src=".\image\img1.jpg" alt="" />
          </div>
          <div>
            <img src=".\image\img2.jpg" alt="" />
          </div>
          <div>
            <img src=".\image\img3.jpg" alt="" />
          </div>
          <div>
            <img src=".\image\img4.jpg" alt="" />
          </div>
          <div>
            <img src=".\image\img5.jpg" alt="" />
          </div>
          <div>
            <img src=".\image\img1.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Title;
export { WhatDoIDo, Works };

// class WhoAmI1 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>New class Component</h1>
//         <p>Name : {this.props.name}</p>
//         <p>Age : {this.props.Age}</p>
//       </div>
//     );
//   }
// }

//export default WhoAmI1;
// export { Student };
