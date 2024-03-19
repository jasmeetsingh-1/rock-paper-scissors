import React from "react";
import PlayGround from "./playGround";
import TicTacToe from "./ticTacToe";

function IsPLaying({ playingWhat }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {playingWhat === "rockPaperScissors" ? <PlayGround /> : <TicTacToe />}
    </div>
  );
}

export default IsPLaying;
