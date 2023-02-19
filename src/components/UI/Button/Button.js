/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../../../App.css";

const Button = ({ option, question, answer }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDisableButtons = () => {
    const buttons = document.querySelectorAll("#q" + question);
    buttons.forEach((button) => {
      button.classList.add("disabled");
    });

    const allButtons = document.querySelectorAll(".optionButton");
    var ButtonCount = allButtons.length;

    allButtons.forEach((button) => {
      if (button.classList.contains("disabled")) {
        ButtonCount = ButtonCount - 1;
      }
    });

    if (ButtonCount === 0) {
      document.querySelector(".submitButton").classList.remove("noShow");
    }
  };

  const handleClick = () => {
    if (option === answer) {
      setIsCorrect(true);
    }

    handleDisableButtons();
    if (isCorrect) {
      document.querySelector("#qu" + question).classList.add("correct");
      console.log("correct");
    } else {
      document.querySelector("#qu" + question).classList.add("incorrect");
      console.log("incorrect");
    }
  };

  return (
    <button className="optionButton" id={"q" + question} onClick={handleClick}>
      {option}
    </button>
  );
};

export default Button;
