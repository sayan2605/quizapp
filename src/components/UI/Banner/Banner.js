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
      <button
        style={{
          width: "600px",
          height: "50px",
          backgroundColor: "#FFBA93",
        }} 
        onClick={() => {
          document.querySelector(".banner").classList.add("noShow");
          document.querySelector(".quizApp").classList.remove("noShow");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Banner;
