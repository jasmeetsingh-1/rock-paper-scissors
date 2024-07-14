import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./cssFiles/TicTacToe.css";
import cross from "../assets/cross-svgrepo-com.svg";
import circle from "../assets/circle-svgrepo-com.svg";
import Card from "../components/card";
import NamesModal from "./ticTacToeNamesModal";

function TicTacToe({ setIsPlaying }) {
  const [namePlayers, setNamePlayers] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });
  const [playerPlaying, setplayerPlaying] = useState(true); //if true --> first player, false --> second Player
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [winner, setWinner] = useState("");

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

    if (checkingForWin(winingCases, playerTwo)) {
      setWinner(namePlayers.secondPlayer);
    }
  }, [playerTwo, setWinner, namePlayers.secondPlayer]);
  useEffect(() => {
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

    if (checkingForWin(winingCases, playerOne)) {
      setWinner(namePlayers.firstPlayer);
    }
  }, [playerOne, setWinner, namePlayers.firstPlayer]);

  const resetValues = ()=>{
    setPlayerOne([]);
    setPlayerTwo([]);
    setWinner("");
    setplayerPlaying(true);
  }


  return (
    <Card className="ticTacToe-card">
      <div
        style={{ position: "absolute", top: "40px" }}
        className="main-menu-option"
        onClick={() => {
          setIsPlaying(false);
        }}
      >
        Go to main menu
      </div>
      {winner ? (
        <div className="ticTacTow-header">{`${winner} won`}</div>
      ) : (
        <div className="ticTacTow-header">
          {
            playerPlaying ? `${namePlayers.firstPlayer}'s turn` : `${namePlayers.secondPlayer}'s turn`
          }
        </div>
      )}

      <div className="ticTacToe-main-outer-div">
        <div className="ticTacToe-grid-row">
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(1) === true
                ? "secondPlayer-played"
                : whoPlayed(1) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(1);
            }}
          >
            {whoPlayed(1) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(1) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(2) === true
                ? "secondPlayer-played"
                : whoPlayed(2) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(2);
            }}
          >
            {whoPlayed(2) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(2) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(3) === true
                ? "secondPlayer-played"
                : whoPlayed(3) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(3);
            }}
          >
            {whoPlayed(3) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(3) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="ticTacToe-grid-row">
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(4) === true
                ? "secondPlayer-played"
                : whoPlayed(4) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(4);
            }}
          >
            {whoPlayed(4) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(4) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(5) === true
                ? "secondPlayer-played"
                : whoPlayed(5) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(5);
            }}
          >
            {whoPlayed(5) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(5) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(6) === true
                ? "secondPlayer-played"
                : whoPlayed(6) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(6);
            }}
          >
            {whoPlayed(6) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(6) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="ticTacToe-grid-row">
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(7) === true
                ? "secondPlayer-played"
                : whoPlayed(7) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(7);
            }}
          >
            {whoPlayed(7) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(7) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(8) === true
                ? "secondPlayer-played"
                : whoPlayed(8) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(8);
            }}
          >
            {whoPlayed(8) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(8) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
          <div
            className={`ticTacToe-grid-inner-div ${
              whoPlayed(9) === true
                ? "secondPlayer-played"
                : whoPlayed(9) === false
                ? "firstPlayer-played"
                : ""
            }`}
            onClick={() => {
              newTurnHandler(9);
            }}
          >
            {whoPlayed(9) === true ? (
              <img src={circle} alt="circle" width="30px" />
            ) : whoPlayed(9) === false ? (
              <img src={cross} alt="circle" width="30px" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <button
        className="reset-button"
        onClick={resetValues}
      >
        Play Again!
      </button>
      <NamesModal setNamePlayers={setNamePlayers} />
    </Card>
  );
}

export default TicTacToe;
