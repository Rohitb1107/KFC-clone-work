import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Deals from "./Components/Deals";
import Modal1 from "./Components/Modal1";
import Modal2 from "./Components/Modal2";
import Modal3 from "./Components/Modal3";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Deals /> */}
      {/* <Modal1 /> */}
      {/* <Modal2 /> */}
      {/* <Modal3 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/modal1" element={<Modal1 />} />
        <Route path="/deals/modal2" element={<Modal2 />} />
        <Route path="/deals/modal3" element={<Modal3 />} />
      </Routes>
    </>
  );
}

export default App;
