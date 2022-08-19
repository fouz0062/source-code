import "./sass/main.min.css";
import MenuBar from "./Components/MenuBar";
import Feature from "./Components/Feature";
import AboutUS from "./Components/AboutUs";
import Topskill from "./Components/TopSkill";
import Team from "./Components/OurTeam";
import Service from "./Components/Service";
import Core from "./Components/Core";
import Portfolio from "./Components/Portfolio";
import Choose from "./Components/Choose";
import Client from "./Components/Client";
import Blog from "./Components/Blog";
import Tweet from "./Components/Tweet";
import Contact from "./Components/Contact";
import Touch from "./Components/Intouch";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <MenuBar />
      <Feature />
      <AboutUS />
      <Topskill />
      <Team />
      <Service />
      <Core />
      <Portfolio />
      <Choose />
      <Client />
      <Blog />
      <Tweet />
      <Contact />
      <Touch />
      <Footer />
    </div>
  );
}

export default App;
