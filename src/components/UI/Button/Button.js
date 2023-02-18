/* eslint-disable no-unused-vars */
import "../../../App.css";
import { useState } from "react";

const Button = ({ option, question, answer }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleUserClick = () => {
    if (option === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      console.log("Question: ", question);
      console.log("\nAnswer: ", answer);
      console.log("\nUser Answer: ", isCorrect);
    }, 2000);
  };

  return (
    <button className="optionButton" onClick={handleUserClick}>
      {option}
    </button>
  );
};

export default Button;
