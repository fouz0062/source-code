import { FaTwitterSquare } from "react-icons/fa";
import { BsQuestionDiamond } from "react-icons/bs";
function Tweet() {
  return (
    <>
      <div className="tweet--background">
        <div className="container">
          <div className="tweet--title">
            <h2>Latest tweet</h2>
          </div>
          <FaTwitterSquare className="tweet--icon" />
          <div className="tweet--body">
            <div className="tweet--body--head1">Awesome</div>
            <div className="tweet--body--head2">@Awesome</div>
            <p className="tweet--body--para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eros eget nisl sagittis commodo non dignissim purus.
            </p>
            <p className="tweet--body--para2">
              https://t.co/Fniwen4t6465nzcjxj #WordPress
              <span>
                <BsQuestionDiamond />
              </span>
              https://t.co/bfehsfierjsb
            </p>
            <p className="tweet--body--para3">2 months ago</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="tweet--body--video"
          src="https://www.youtube.com/embed/1WUW-OgBTe0"
          title="How to Use a DSLR Camera? A Beginner's Guide"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="tweet1">
        <h2 className="tweet1--title">Watch This</h2>
        <p className="tweet1--para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros
          eget nisl sagittis commodo non dignissim purus.
        </p>
      </div>
    </>
  );
}

export default Tweet;
