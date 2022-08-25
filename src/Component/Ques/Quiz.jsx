import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import Quiz from "../../lib/Quiz";

import { quiz } from "./Quetions";
import "./Quiz.scss";

export default function Que1() {
  // const { state } = useLocation();
  const [quizResult, setQuizResult] = useState();
  console.log("dtat", quiz);
  return (
    <div className="task-user p-5 bg-dark">
      <Quiz
        quiz={quiz}
        shuffle
        onComplete={setQuizResult}
        onQuestionSubmit={(obj) => console.log("user question results:", obj)}
        disableSynopsis
      />
    </div>
  );
}
