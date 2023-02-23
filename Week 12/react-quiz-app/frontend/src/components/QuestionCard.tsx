import React from "react";
import Button from "@mui/material/Button";
import "./QuestionCard.css";

//types
import { userAnswersType } from "../pages/Quiz";
type QCProps = {
  question: string;
  answers: string[];
  callback: any; //change later
  questionNumber: number;
  totalQuestions: number;
  userAnswer: userAnswersType | undefined;
};

const QuestionCard: React.FC<QCProps> = ({
  question,
  answers,
  callback,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div className="card-container">
      {/* <p className="number">
        Question: {questionNumber}/ {totalQuestions}
      </p> */}
      <p className="question">{question}:</p>
      <div className="answers-container">
        {answers.map((answer) => (
          <div key={answer}>
            <Button
              key={answer}
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
            >
              {answer}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
