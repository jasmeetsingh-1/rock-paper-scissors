import React, { useEffect, useState } from "react";
import "./cssFiles/playGround.css";
import back from "../assets/back-svgrepo-com.svg";
import hand from "../assets/hand.svg";
import rock from "../assets/stone.svg";
import scissors from "../assets/scissors.svg";
import rockOption from "../assets/choose/choose_stone.svg";
import handOption from "../assets/choose/choose_hand.svg";
import scissorsOption from "../assets/choose/choose_scissors.svg";
import Lottie from "lottie-react";
import wonAnnimation from "../assets/wonAnnimation.json";
import Card from "./card";

function PlayGround({ setInPlayGround }) {
  const values = ["rock", "scissors", "paper"];

  function chooseRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const [optionChoosen, setOptionChoosen] = useState("");
  const [result, setResult] = useState("lose");
  const [score, setScore] = useState(0);
  const [robotOptionChoosen, setRobotOptionChoosen] = useState("");

  useEffect(() => {
    const calculateScore = () => {
      if (optionChoosen === "rock" && robotOptionChoosen === "scissors") {
        setResult("win");
        setScore((prev) => prev + 1);
      } else if (optionChoosen === "paper" && robotOptionChoosen === "rock") {
        setResult("win");
        setScore((prev) => prev + 1);
      } else if (
        optionChoosen === "scissors" &&
        robotOptionChoosen === "paper"
      ) {
        setResult("win");
        setScore((prev) => prev + 1);
      } else if (optionChoosen === "rock" && robotOptionChoosen === "paper") {
        setResult("lose");
      } else if (
        optionChoosen === "paper" &&
        robotOptionChoosen === "scissors"
      ) {
        setResult("lose");
      } else if (
        optionChoosen === "scissors" &&
        robotOptionChoosen === "rock"
      ) {
        setResult("lose");
      } else if (robotOptionChoosen === optionChoosen) {
        setResult("draw");
      }
    };
    calculateScore();
  }, [optionChoosen, robotOptionChoosen]);

  const robotPlaying = () => {
    setRobotOptionChoosen(chooseRandomValue(values));
  };
  return (
    <Card className="playGround-outer-div">
      <div className="score-holder-playGround">
        {/* <img
        //   src={back}
        //   alt="back-svg"
        //   width="20px"
        //   onClick={() => {
        //     setInPlayGround(false);
        //   }}
        // /> */}
        <span>Score: {score} </span>
      </div>
      <img
        src={
          robotOptionChoosen === "rock"
            ? rock
            : robotOptionChoosen === "scissors"
            ? scissors
            : robotOptionChoosen === "paper"
            ? hand
            : hand
        }
        alt={robotOptionChoosen}
        style={{ transform: "rotate(180deg)" }}
        width="100px"
      />
      <div className="playGround-heading">
        {optionChoosen === "" ? (
          "Let's Play!"
        ) : (
          <div className="play-again-result-playGround">
            <span>
              {result === "win" ? (
                <div
                  style={{ display: "flex", flexDirection: "column-reverse" }}
                >
                  "You Won!"
                  <div style={{ maxWidth: "124px" }}>
                    <Lottie
                      animationData={wonAnnimation}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                </div>
              ) : result === "lose" ? (
                "You lose!"
              ) : result === "draw" ? (
                "Its a draw"
              ) : (
                "nothing"
              )}
            </span>
            <button
              onClick={() => {
                setRobotOptionChoosen("");
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
                robotPlaying();
                setOptionChoosen("rock");
              }}
            />
            <img
              src={handOption}
              alt="hand-svg"
              onClick={() => {
                robotPlaying();
                setOptionChoosen("paper");
              }}
            />
            <img
              src={scissorsOption}
              alt="scissors-svg"
              onClick={() => {
                robotPlaying();
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
    </Card>
  );
}

export default PlayGround;
