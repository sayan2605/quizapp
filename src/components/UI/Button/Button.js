import "../../../App.css";
import { useState } from "react";

const Button = ({ option, question, answer }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleButton = () => {
    const button = document.querySelectorAll("q" + question);
    button.forEach((button) => {
      button.classList.add("disabled");
    });

  const handleButtonClick = () => {
    handleButton();
    if (option === answer) {
      setIsCorrect(true);
    }
  };

  return (
    <button
      className={`optionButton ${isCorrect ? "correct" : ""}`}
      id={"q" + question}
      onClick={handleButtonClick}
      disabled={isCorrect}
    >
      {option}
    </button>
  );
};

export default Button;
