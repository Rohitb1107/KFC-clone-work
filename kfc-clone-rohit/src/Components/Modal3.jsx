import React, { useState } from "react";
import "./Modal1.css";
// import "../App.css";

function Modal({ closeModal }) {
  const [name, setName] = useState("");
  const [headText, setHeadText] = useState("");

  function onChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setHeadText(name);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>SCHEDULE ORDER</h1>
          </div>
          {/* <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button> */}
        </div>
        <div className="body-3">
          <div className="order-type">
            <p>ORDER TYPE</p>
            <p>Delivery</p>
          </div>

          <div className="your-location">
            <p>ORDER TYPE</p>
            <p>Delivery</p>
          </div>

          <div className="schedule-order">
            <p>ORDER TYPE</p>
            <p>Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
