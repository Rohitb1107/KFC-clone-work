import React from "react";
import "./Modal1.css";
// import "../App.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>DELIVERY ADDRESS</h1>
          </div>
          {/* <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="body body-2">
          <input
            type="text"
            placeholder="     Enter your delivery address"
            name="address-text"
            id="address-text"
          />
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
