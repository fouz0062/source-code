import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="blog">
            <h2 className="blog--title">our Blog</h2>
            <p className="blog--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="blog--grid">
            <div className="blog--grid--grid1">
              <div>
                <div>
                  <img src="./image/blog-img1.jpg" alt="" />
                </div>
                <div className="para1">
                  <h4>Dramatically redefine</h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus. Aliquam
                  rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
                  <a href="">
                    <button>Read more</button>
                  </a>
                </div>
                <div className="para1--absolute"></div>
              </div>
              <div>
                <div className="para2">
                  <h4>Donec Rutrum congue</h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a eros eget nisl sagittis commodo non dignissim purus. Aliquam
                  rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
                  <a href="">
                    <button>Read more</button>
                  </a>
                </div>
                <div className="para2--absolute"></div>
                <div>
                  <img src="./image/blog-img2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src="./image/blog-img3.jpg" alt="" />
              </div>
              <div className="para3--absolute"></div>
              <div className="para3">
                <h4>Hello World!</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eros eget nisl sagittis commodo non dignissim purus. Aliquam
                rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
                <a href="">
                  <button>Read more</button>
                </a>
              </div>
            </div>
          </div>
          <a href="">
            <button className="blog--view--btn">View All</button>
          </a>
        </div>
      </>
    );
  }
}

export default Blog;
