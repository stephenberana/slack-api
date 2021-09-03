import { useRef, useState, React } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./login-registration.css";
import { API } from "../App";

const Login = (props) => {
  const email = useRef(null);
  const password = useRef(null);

  const { handleSubmit } = useForm({});

  const submitForm = (data) => {
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(user);

    axios({
      url: `${API}/api/v1/auth/sign_in`,
      method: "POST",
      data: user,
      headers: config,
    })
      .then((response) => {
        props.setLoginHeaders(response.headers);
        console.log(response.headers);
      })
      .catch(function (error) {
        console.log(error);
      });
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
