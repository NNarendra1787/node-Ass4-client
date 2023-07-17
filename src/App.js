import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import logo from "./img/safe.png";

function App() {
  // const navi =  useNavigate();

  return (
    <div className="App">
      <div className="navigation">
        <div className="log">
          <img src={logo} alt="loading" className="mylog" />
          <h2 id="hd">Welcome To KingGroups</h2>
        </div>
        <div className="btns">
          <Link to={"/signup"} className="btn">
            {" "}
            <button id="btn1">Signup</button>
          </Link>

          <Link to={"/login"} className="btn">
            <button id="btn1" onClick={() => {}}>
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* <h1>Welcome To KingGroups</h1> */}
      <footer>
        <h4>&copy; This Website All Right Reserved!. With KingGroups.</h4>
      </footer>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
