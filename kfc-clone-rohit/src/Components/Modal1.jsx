import React from "react";
import "./Modal.css";
// import "../App.css";
import { Link } from "react-router-dom";


function Modal1({ closeModal }) {
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
          <Link to={`/deals/modal2`}>
            <button>Delivery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal1;
