import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./cssFiles/ticTacToeNamesModal.css";

function NamesModal({ setNamePlayers }) {
  const [showing, setShowing] = useState(true);
  const [players, setPlayers] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });

  const [nameError, setnameErrors] = useState({
    firstPlayer: false,
    secondPlayer: false,
  });

  const namesFormSubmitHandler = (e) => {
    e.preventDefault();
    let errors = { firstPlayer: false, secondPlayer: false };
    if (players.firstPlayer.trim() === "") {
      errors = { ...errors, firstPlayer: true };
    }
    if (players.secondPlayer.trim() === "") {
      errors = { ...errors, secondPlayer: true };
    }

    if (errors.firstPlayer || errors.secondPlayer) {
      setnameErrors({
        firstPlayer: errors.firstPlayer,
        secondPlayer: errors.secondPlayer,
      });
      return;
    }
    setNamePlayers({
      firstPlayer: players.firstPlayer,
      secondPlayer: players.secondPlayer,
    });
    setShowing(false);
  };
  return (
    <Modal
      show={showing}
      onHide={() => {
        setShowing(false);
      }}
      size="sm"
      backdrop="static"
      centered
      contentClassName="names-modal"
    >
      <Modal.Header className="names-form-header">
        <span>Welcome to Tic Tac Toe</span>
        <span>Please enter players name to begin</span>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={namesFormSubmitHandler}
          className="row names-form-holder"
        >
          <div className="col names-form-row">
            <label htmlFor="firstPlayer">First Player</label>
            <input
              style={{ border: nameError.firstPlayer ? "1px solid red" : "" }}
              type="text"
              name="firstPlayer"
              id="firstPlayer"
              placeholder="Enter First Player name"
              value={players.firstPlayer}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  !/^[0-9]+$/.test(value.charAt(value.length - 1)) &&
                  !/[^a-zA-Z0-9\s]/.test(value)
                ) {
                  setnameErrors({ ...nameError, firstPlayer: false });
                  setPlayers({ ...players, firstPlayer: value });
                }
              }}
            />
          </div>
          <div className="col names-form-row">
            <label htmlFor="secondPlayer">Second Player</label>
            <input
              style={{ border: nameError.secondPlayer ? "1px solid red" : "" }}
              type="text"
              name="secondPlayer"
              id="secondPlayer"
              placeholder="Enter Second Player name"
              value={players.secondPlayer}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  !/^[0-9]+$/.test(value.charAt(value.length - 1)) &&
                  !/[^a-zA-Z0-9\s]/.test(value)
                ) {
                  setnameErrors({ ...nameError, secondPlayer: false });
                  setPlayers({ ...players, secondPlayer: value });
                }
              }}
            />
          </div>
          <div className="names-form-buttons-holder">
            <button type="submit">Confirm</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPlayers({
                  firstPlayer: "",
                  secondPlayer: "",
                });
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default NamesModal;
