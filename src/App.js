import DiceGame from "./components/DiceGame";
import "./App.css";
const randomNumber = () => {
  const number = Math.floor(Math.random() * 6) + 1;
  console.log("our number", number);
  return number;
};

function App() {
  return (
    <div className="App">
      <h1>Score</h1>
      <DiceGame />
    </div>
  );
}

export default App;
