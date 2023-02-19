import React from "react";
import Button from "../Button/Button";
import "../../../App.css";

const Card = ({
  value: { questionId, question, option1, option2, option3, option4, answer },
}) => {
  return (
    <div className="cardContainer">
      <p className="question" id={"qu" + questionId}>
        {question}
      </p>
      <div className="buttonContainer">
        <Button option={option1} question={questionId} answer={answer} />
        <Button option={option2} question={questionId} answer={answer} />
        <Button option={option3} question={questionId} answer={answer} />
        <Button option={option4} question={questionId} answer={answer} />
      </div>
    </div>
  );
};

export default Card;
