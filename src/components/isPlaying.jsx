import React from "react";
import PlayGround from "./playGround";
import TicTacToe from "./ticTacToe";

function IsPLaying({ playingWhat, setIsPlaying }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {playingWhat === "rockPaperScissors" ? (
        <PlayGround setIsPlaying={setIsPlaying} />
      ) : (
        <TicTacToe setIsPlaying={setIsPlaying} />
      )}
    </div>
  );
}

export default IsPLaying;
