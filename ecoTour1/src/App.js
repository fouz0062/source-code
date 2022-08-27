import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Destination } from "./Pages/Destination";
import { PrivateTour } from "./Pages/PrivateTour";
import { SingleTour } from "./Pages/SingleTour";
import { TourList } from "./Pages/TourList";
import { Template } from "./Pages/Template";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />}></Route>
            <Route path="Destination" element={<Destination />}></Route>
            <Route path="PrivateTour" element={<PrivateTour />}></Route>
            <Route path="SingleTour" element={<SingleTour />}></Route>
            <Route path="TourList" element={<TourList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
