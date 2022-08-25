import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Que1 from "./Component/Ques/Quiz";

import Sign from "./Component/Sign/Sign";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container menus">
        <Router>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/quiz" element={<Que1 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
