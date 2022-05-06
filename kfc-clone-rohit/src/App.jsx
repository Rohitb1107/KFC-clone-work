import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Deals from "./Components/Deals";
import Modal1 from "./Components/Modal1";
import Modal2 from "./Components/Modal2";
import Modal3 from "./Components/Modal3";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      {/* <Deals /> */}
      {/* <Modal1 /> */}
      {/* <Modal2 /> */}
      <Modal3 />
    </>
  );
}

export default App;
