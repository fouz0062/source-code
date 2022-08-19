import React from "react";

function MenuBar() {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: "url(" + "./image/head-img.jpg" + ")" }}
      >
        <h5 className="background--title">Awesome</h5>
        <div className="skilled">
          <h1 className="skilled--title">Skilled on</h1>
          <p className="skilled--para">HTML-CSS-JAVASCRIPT</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex--left">Awesome</div>
        <div className="flex--right">
          <div>
            <a href="" className="active">
              Home
            </a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Team</a>
          </div>
          <div>
            <a href="">Service</a>
          </div>
          <div>
            <a href="">Portfolio</a>
          </div>
          <div>
            <a href="">Client</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
