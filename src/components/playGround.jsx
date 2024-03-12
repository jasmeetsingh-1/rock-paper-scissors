import React, { useEffect, useState } from "react";
import "./cssFiles/playGround.css";
import back from "../assets/back-svgrepo-com.svg";
import hand from "../assets/hand.svg";
import rock from "../assets/stone.svg";
import scissors from "../assets/scissors.svg";
import rockOption from "../assets/choose/choose_stone.svg";
import handOption from "../assets/choose/choose_hand.svg";
import scissorsOption from "../assets/choose/choose_scissors.svg";

function PlayGround({ setInPlayGround }) {
  const [optionChoosen, setOptionChoosen] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(3);
  useEffect(() => {
    setResult("");
    setScore(3);
  }, [setResult, setScore]);
  return (
    <div className="playGround-outer-div">
      <div className="score-holder-playGround">
        <img
          src={back}
          alt="back-svg"
          width="20px"
          onClick={() => {
            setInPlayGround(false);
          }}
        />
        <span>Score: {score} </span>
      </div>
      <img
        src={hand}
        alt="hand-svg"
        width="100px"
        style={{ transform: "rotate(180deg)" }}
      />
      <div className="playGround-heading">
        {optionChoosen === "" ? (
          "Let's Play!"
        ) : (
          <div className="play-again-result-playGround">
            <span>
              {result === "won"
                ? "You Won!"
                : result === "lose"
                ? "You lose!"
                : "Its a draw"}
            </span>
            <button
              onClick={() => {
                setOptionChoosen("");
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {optionChoosen === "" ? (
        <div className="options-holder-playGround">
          <h3 style={{ margin: "0" }}>PICK AN OPTION:</h3>
          <div className="option-holder-playGround">
            <img
              src={rockOption}
              alt="rock-svg"
              onClick={() => {
                setOptionChoosen("rock");
              }}
            />
            <img
              src={handOption}
              alt="hand-svg"
              onClick={() => {
                setOptionChoosen("hand");
              }}
            />
            <img
              src={scissorsOption}
              alt="scissors-svg"
              onClick={() => {
                setOptionChoosen("scissors");
              }}
            />
          </div>
        </div>
      ) : (
        <img
          src={
            optionChoosen === "rock"
              ? rock
              : optionChoosen === "scissors"
              ? scissors
              : hand
          }
          alt={optionChoosen}
          width="100px"
        />
      )}
    </div>
  );
}

export default PlayGround;
