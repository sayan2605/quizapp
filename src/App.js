import "./App.css";
import Banner from "./components/UI/Banner/Banner";
import Card from "./components/UI/Card/Card";
import Data from "./Data/Data.json";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="quizApp noShow">
        {Data.data.map((value, index) => {
          return <Card key={index} value={value} />;
        })}
      </div>
      <button
        className="submitButton noShow"
        onClick={() => {
          document.querySelector(".quizApp").classList.add("noShow");
          document.querySelector(".submitButton").classList.add("noShow");

          const correctAnswers = document.querySelectorAll(".correct");
          const correctAnswerCount = correctAnswers.length;

          const result = document.querySelector(".quizResult");
          result.innerHTML = `You have answered ${correctAnswerCount} / 5 questions correctly`;

          <Banner />;
          document.querySelector(".banner").classList.remove("noShow");
          document.querySelector(".quizResult").classList.remove("noShow");
        }}
      >
        Show Results
      </button>
    </div>
  );
}
export default App;
