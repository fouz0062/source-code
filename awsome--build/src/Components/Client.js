import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

class Client extends React.Component {
  render() {
    return (
      <>
        <div
          className="client"
          style={{
            backgroundImage: "url(" + "./image/client-background.jpg" + ")",
          }}
        >
          <div className="Container">
            <h2 className="client--title">Client</h2>
            <p className="client--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus. Aliquam
              rhoncus tristique est, eu tempor ex. Nullam ac facilisis eros.
            </p>
          </div>
          <div className="client--carousel container">
            <div>
              <FaQuoteLeft />
            </div>
            <div className="client--carousel--main">
              <div>
                <div>
                  <img src="./image/client3.jpg" alt="" id="1" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4>Martin-Ceo</h4>
                </div>
              </div>
            </div>
            <div>
              <FaQuoteRight />
            </div>
          </div>
        </div>
        <ClientPart />
      </>
    );
  }
}

function ClientPart() {
  return (
    <>
      <div className="client--background--color">
        <div className="container client--flex1">
          <div>ViewFlux</div>
          <div>quiqstart</div>
          <div>volkdeer</div>
          <div>deaq</div>
        </div>
      </div>
    </>
  );
}

export default Client;
