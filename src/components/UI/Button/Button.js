import { useState } from "react";
import "../../../App.css";

const Button = ({ option, question, answer }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDisableButtons = () => {
    const buttons = document.querySelectorAll("#q" + question);
    buttons.forEach((button) => {
      button.classList.add("disabled");
    });
  };

  const handleClick = () => {
    handleDisableButtons();
    if (option === answer) {
      setIsCorrect(true);
    }
  };

  return (
    <button className="optionButton" id={"q" + question} onClick={handleClick}>
      {option}
    </button>
  );
};

export default Button;
