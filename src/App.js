import "./App.css";
import Title from "./components/classcomponents";
import Bio from "./components/fncomponents";
import { WhatDoIDo, Works } from "./components/classcomponents";
import { Experience } from "./components/fncomponents";
import { Footer } from "./components/fncomponents";
// import WhoAmI1 from "./components/classcomponents";
// import WhoAmI from "./components/fncomponents";
// import Bio, { Student1 } from "./components/fncomponents";
// import { Student } from "./components/classcomponents";
function App() {
  return (
    <div className="App">
      <Title />
      <Bio />
      <WhatDoIDo />
      <Experience />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
