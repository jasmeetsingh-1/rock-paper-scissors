import "./App.css";
// import MainPage from "./components/mainPage";
import TicTacToe from "./components/ticTacToe";
import LandingPage from "./components/landingPage";
import PlayGround from "./components/playGround";

function App() {
  return (
    <div className="app-div-outer roboto-thin">
      <LandingPage />
      {/* <PlayGround /> */}
    </div>
  );
}

export default App;
