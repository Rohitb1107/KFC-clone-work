import React from "react";
import "./Modal1.css";
// import "../App.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>START YOUR ORDER</h1>
          </div>
          {/* <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="body">
          <p>HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</p>
        </div>
        <div className="btn-div">
          <button>Pick Up</button>
          <button>Dine in</button>
          <button>Delivery</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
