import React, { useState } from "react";
import "./cssFiles/mainPage.css";
import PlayGround from "./playGround";
import annimation from "../assets/Animation - 1710259044306.json";
import Lottie from "lottie-react";
import Card from "./card";

function MainPage() {
  const [inPlayGround, setInPlayGround] = useState(false);
  return (
    <>
      {inPlayGround ? (
        <PlayGround setInPlayGround={setInPlayGround} />
      ) : (
        <Card>
          <div
            style={{
              color: "lightgray",
              fontSize: "xx-small",
              textAlign: "center",
            }}
          >
            Welcome to REACT Games
          </div>
          <div className="main-landing-heading">
            ROCK <br />
            / PAPER / <br />
            SCISSORS
          </div>
          <div className="main-landing-image">
            <Lottie animationData={annimation} loop={true} autoplay={true} />
          </div>
          <div className="main-landing-button">
            <button
              onClick={() => {
                setInPlayGround(true);
              }}
            >
              START
            </button>
          </div>
        </Card>
      )}
    </>
  );
}

export default MainPage;
