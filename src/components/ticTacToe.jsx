import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./playGround.css";
import cross from "../assets/cross-svgrepo-com.svg";
import circle from "../assets/circle-svgrepo-com.svg";

function TicTacToe() {
  const [playerPlaying, setplayerPlaying] = useState(true); //if true --> first player, false --> second Player
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [winner, setWinner] = useState("");
  let winingCases = [
    [1, 2, 3],
    [1, 4, 7],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const validateMove = (newPlay) => {
    if (winner !== "") {
      return false;
    }
    let indexForPlayerOne = playerOne.findIndex((item) => item === newPlay);
    let indexForSecondPlayer = playerTwo.findIndex((item) => item === newPlay);

    if (indexForPlayerOne === -1 && indexForSecondPlayer === -1) return true;
    return false;
  };

  const whoPlayed = (newPlay) => {
    //true -> player one, false -> player two
    if (playerOne.findIndex((item) => item === newPlay) !== -1) return true;
    if (playerTwo.findIndex((item) => item === newPlay) !== -1) return false;
  };

  const newTurnHandler = (newPlay) => {
    if (validateMove(newPlay)) {
      if (playerPlaying) {
        setPlayerOne((prev) => [...prev, newPlay]);
      } else if (!playerPlaying) {
        setPlayerTwo((prev) => [...prev, newPlay]);
      }
      setplayerPlaying((prev) => !prev);
    } else {
      console.log("false");
    }
  };

  const checkingForWin = (winingCases, player) => {
    return winingCases.some((winingCase) => {
      return winingCase.every((position) => player.includes(position));
    });
  };

  useEffect(() => {
    if (checkingForWin(winingCases, playerTwo)) {
      setWinner("Player Two");
    }
  }, [playerTwo]);
  useEffect(() => {
    if (checkingForWin(winingCases, playerOne)) {
      setWinner("Player one");
    }
  }, [playerOne]);

  return (
    <div>
      <div className="main-playGroundHolder">
        <div className="block-holder-tick-tak">
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(1);
            }}
          >
            {whoPlayed(1) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(1) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(2);
            }}
          >
            {whoPlayed(2) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(2) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(3);
            }}
          >
            {whoPlayed(3) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(3) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="block-holder-tick-tak" style={{ margin: "0.5rem 0" }}>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(4);
            }}
          >
            {whoPlayed(4) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(4) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(5);
            }}
          >
            {whoPlayed(5) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(5) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(6);
            }}
          >
            {whoPlayed(6) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(6) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="block-holder-tick-tak">
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(7);
            }}
          >
            {whoPlayed(7) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(7) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(8);
            }}
          >
            {whoPlayed(8) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(8) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
          <div
            className="tickTakBlock"
            onClick={() => {
              newTurnHandler(9);
            }}
          >
            {whoPlayed(9) === true ? (
              <img src={circle} width="50px" />
            ) : whoPlayed(9) === false ? (
              <img src={cross} width="50px" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="winner-holder">{winner}</div>
    </div>
  );
}

export default TicTacToe;
