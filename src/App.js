import "./App.css";
import MainPage from "./components/mainPage";
import TicTacToe from "./components/ticTacToe";

function App() {
  return (
    <div className="app-div-outer roboto-thin">
      <TicTacToe />
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
