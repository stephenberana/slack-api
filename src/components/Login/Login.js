import { useRef, useState, React } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./login-registration.css";
import { API } from "../../App";
import { useHistory, Link } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  var loginHeaders = useRef(null);
  var loginData = useRef(null);
  var userChannels = useRef(null);
  const [channel, setAllChannels] = useState([]);
  const { register, handleSubmit } = useForm({});

  const submitForm = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);

    axios({
      url: `${API}/api/v1/auth/sign_in`,
      method: "POST",
      data: user,
      headers: config,
    })
      .then((response) => {
        console.log(response);
        loginHeaders = response.headers;
        loginData = response.data;
        console.log(loginHeaders);
        localStorage.setItem("loginHeaders", JSON.stringify(loginHeaders));
        localStorage.setItem("loginData", JSON.stringify(loginData));
        console.log(localStorage.getItem("loginHeaders"));
        axios({
          url: `${API}/api/v1/channels`,
          method: "GET",
          headers: loginHeaders,
        })
          .then((response) => {
            console.log("these are the channels");
            userChannels = response.data;
            console.log(userChannels);
            localStorage.setItem("userChannels", JSON.stringify(userChannels));
            setAllChannels(userChannels);
          })
          .catch((error) => console.log(error));
      })
      .catch(function (error) {
        console.log(error);
      });
    history.push("dashboard");
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded, charset=UTF-8",
      Accept: "application/json",
    },
  };

  return (
    <div className="login-container">
      <div className="column1"></div>
      <div className="column2">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <label className="login-label">Email</label>
          <input
            style={{ marginTop: "16px" }}
            className="inputField"
            type="email"
            name="email"
            ref={email}
            placeholder="Enter your email"
          />
          <br />

          <label className="login-label">Password</label>
          <input
            className="inputField"
            type="password"
            name="password"
            ref={password}
            placeholder="Input password"
          />

          <span className="login-label">
            New to Maroons Slack?
            <br />
            <a href="register-link">Register here.</a>
          </span>
          <button className="login-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
