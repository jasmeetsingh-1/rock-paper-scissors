import React, { useState } from "react";
import "./cssFiles/mainPage.css";
import PlayGround from "./playGround";
import annimation from "../assets/Animation - 1710259044306.json";
import Lottie from "lottie-react";

function MainPage() {
  const [inPlayGround, setInPlayGround] = useState(false);
  return (
    <>
      {inPlayGround ? (
        <PlayGround setInPlayGround={setInPlayGround} />
      ) : (
        <div className="main-landing-outer-div">
          <div
            style={{
              color: "lightgray",
              fontSize: "xx-small",
              textAlign: "center",
            }}
          >
            Web Vectors by Issara
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
        </div>
      )}
    </>
  );
}

export default MainPage;
