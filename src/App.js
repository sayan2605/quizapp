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
    </div>
  );
}
export default App;
