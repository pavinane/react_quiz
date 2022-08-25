import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Que1 from "./Component/Ques/Que1";
// import Que2 from "./Component/Ques/Que2";
import Sign from "./Component/Sign/Sign";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container menus">
        <Router>
          {/* <ul>
          <li>
            <Link to="/">Sign</Link>
          </li>
          <li>
            <Link to="/ques1">Question 1</Link>
          </li>
          <li>
            <Link to="/ques2">Question 2</Link>
          </li>
          <li>
            <Link to="/ques3">Question 3</Link>
          </li>
        </ul> */}

          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/ques1" element={<Que1 />} />>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
