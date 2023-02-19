import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Quiz App
      </h1>

      <div className="quizResult noShow">.</div>

      <button
        style={{
          width: "600px",
          height: "50px",
          backgroundColor: "#FFBA93",
        }}
        onClick={() => {
          document.querySelector(".banner").classList.add("noShow");
          document.querySelector(".quizApp").classList.remove("noShow");

          const allButtons = document.querySelectorAll(".optionButton");
          allButtons.forEach((button) => {
            button.classList.remove("disabled");
          });

          const allQuestions = document.querySelectorAll(".question");
          allQuestions.forEach((question) => {
            question.classList.remove("correct");
            question.classList.remove("incorrect");
          });

          document.querySelector(".submitButton").classList.add("noShow");

          document.querySelector(".quizResult").classList.add("noShow");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Banner;
