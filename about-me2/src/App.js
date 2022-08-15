import "./App.css";
// import img1 from "./image/prifile.jpg";
// import img from "./image/pexels-mathias-reding-12708081.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div>
            <img src="./image/prifile.jpg" alt="profile" />
          </div>
          <div>
            <h4>Fouziya</h4>
            <p>Trainee</p>
            <button>
              <a href="mailto:fouzifathii@gmail.com">email</a>
            </button>
          </div>
        </div>
        <div className="sub-header">
          <a href="">
            <div>Project</div>
          </a>
          <a href="">
            <div>About Me</div>
          </a>
          <a href="">
            <div>Contact Me</div>
          </a>
        </div>
        <div className="body">
          <h3>Project/Experience</h3>
          <div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 1</h2>
              <p>Content goes here....</p>
            </div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 2</h2>
              <p>Content goes here....</p>
            </div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 3</h2>
              <p>Content goes here....</p>
            </div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 4</h2>
              <p>Content goes here....</p>
            </div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 5</h2>
              <p>Content goes here....</p>
            </div>
            <div>
              <img
                src="./image/pexels-mathias-reding-12708081.jpg"
                alt="project"
              />
              <h2>Project 6</h2>
              <p>Content goes here....</p>
            </div>
          </div>
        </div>
        <div className="bio">
          <h3>About Me</h3>
          <div>
            <div>
              <h4>Personal Details</h4>
              <ul>
                <li>Fouziya</li>
                <li>DOB</li>
                <li>Location</li>
                <li>Status</li>
                <li>Ph:xxxxxxxx</li>
              </ul>
            </div>
            <div>
              <h4>Education/Skillset</h4>
              <ul>
                <li>MBA</li>
                <li>B.SC</li>
                <li>HTML,CSS,JavaScript,Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>@copyright 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
