import "../../../App.css";
import { useState } from "react";

const Button = ({ option, question, answer }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleButtonClick = () => {
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
