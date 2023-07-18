import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [info, setInfo] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(typeof email);

  const navi = useNavigate();
  // const HandelChange = (e) => {
  //   setInfo({ [e.target.name]: e.target.value });
  // };
  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://node-assign4-data.onrender.com/Client/login",
        { email, password }
      );

      // setInfo({
      //   email: "",
      //   password: "",
      // });
      const data = response.data;

      localStorage.setItem("token", data.token);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section id="midparts">
        <h3>Login Page!</h3>
        <form method="POST">
          <label className="inp">
            Email:
            <input
              type="email"
              placeholder="Enter your Email"
              autoComplete="off"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </label>
          <label className="inp">
            Password:
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </label>
          <button id="submit" onClick={submit}>
            Submit
          </button>
        </form>
        <hr className="hrl" />
        <p
          onClick={() => {
            navi("/signup");
          }}
          className="shift"
        >
          Goto Ragistration Page
        </p>
      </section>
    </div>
  );
}

export default Login;
