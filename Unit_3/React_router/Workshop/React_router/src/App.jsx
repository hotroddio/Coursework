// import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./red";
import Blue from "./blue";
import Home from "./Home"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          {/* navigation here */}
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            {/* Individual Routes go here */}
            <Route path="/" element={<Home/>} />
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
