import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./cssFiles/ticTacToeNamesModal.css";

function NamesModal() {
  const [showing, setShowing] = useState(true);
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
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="row names-form-holder"
        >
          <div className="col names-form-row">
            <label htmlFor="firstPlayer">First Player</label>
            <input
              type="text"
              name="firstPlayer"
              id="firstPlayer"
              placeholder="Enter First Player name"
            />
          </div>
          <div className="col names-form-row">
            <label htmlFor="secondPlayer">Second Player</label>
            <input
              type="text"
              name="secondPlayer"
              id="secondPlayer"
              placeholder="Enter Second Player name"
            />
          </div>
          <div className="names-form-buttons-holder">
            <button>Confirm</button>
            <button>Cancel</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default NamesModal;
