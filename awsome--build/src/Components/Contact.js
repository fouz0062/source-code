import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="contact">
            <h2 className="contact--title">Contact</h2>
            <p className="contact--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="contact--form">
            <div>
              <input type="text" placeholder="your name" />
            </div>
            <div>
              <input type="email" placeholder="your e-mail" />
            </div>
            <div>
              <input type="text" placeholder="your subject" />
            </div>
            <div>
              <input type="text" placeholder="your website" />
            </div>
          </div>
          <textarea
            placeholder="write your message"
            className="contact--textarea"
          ></textarea>
          <a href="">
            <button className="contact--button">Send message</button>
          </a>
        </div>
      </>
    );
  }
}

export default Contact;
