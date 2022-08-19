import React from "react";

class AboutUS extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="about">
            <h2 className="about--title">About US</h2>
            <p className="about--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="about--grid">
            <div className="about--grid--left">
              <img src="./image/who-are-we.jpg" alt="" />
            </div>
            <div className="about--grid--right">
              <h4>Who WE are</h4>
              <p>
                <span>
                  A strong team to keep promise surrounding the world.We
                  developed a wide range of web product.
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus. Aliquam
                rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
                Nullam cursus orci id tristique ullamcorper. Integer ipsum
                neque, imperdiet aliquet tincidunt non, aliquam in diam.
              </p>
            </div>
          </div>
          <div className="about--grid2">
            <div className="about--grid2--left">
              <h4>our mission</h4>
              <p>
                <span>
                  A strong team to keep promise surrounding the world.We
                  developed a wide range of web product.
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus. Aliquam
                rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
                Nullam cursus orci id tristique ullamcorper. Integer ipsum
                neque, imperdiet aliquet tincidunt non, aliquam in diam.
              </p>
            </div>
            <div className="about--grid2--right">
              <iframe
                src="https://www.youtube.com/embed/6sU4duA7bbQ"
                title="How To Make an Aesthetic Video Like Haegreendal With Your Phone - Bikin Video Aesthetic Pakai HP"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUS;
