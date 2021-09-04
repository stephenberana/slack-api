import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { API } from "../App";
import "./login-registration.css";
import UPlogo from "./images/UPlogo.jpg";

export default function UserRegistration(props) {
  const email = useRef(null);
  const password = useRef(null);
  const password_confirmation = useRef(null);
  const { handleSubmit } = useForm();

  const submitForm = (data) => {
    const postData = {
      email: email.current.value,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
    };
    console.log(postData);
    axios({
      url: `${API}/api/v1/auth`,
      method: "POST",
      data: postData,
      headers: config,
    })
      .then((response) => {
        console.log(response);
        console.log(data);
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

  const passwordConfirmation = (password, password_confirmation) => {
    if (password !== password_confirmation) {
      alert("Please make sure that both passwords match.");
      return false;
    } else return true;
  };

  return (
    <div className="register-container">
      <div className="reglogo-container">
        <img className="reglogo" src={UPlogo} />
      </div>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <label className="register-label">Email</label>
        <input
          className="inputField"
          type="email"
          name="email"
          ref={email}
          placeholder="Input email"
        />
        <br />

        <label className="register-label">Password</label>
        <input
          className="inputField"
          type="password"
          name="password"
          ref={password}
          placeholder="Input password"
        />

        <br />

        <label className="register-label">Confirm Password</label>
        <input
          className="inputField"
          type="password"
          name="password_confirmation"
          ref={password_confirmation}
          placeholder="Confirm password"
          onSubmit={() => passwordConfirmation}
        />

        <span>
          Already a member? <a href="./">Login here.</a>
        </span>
        <button className="register-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
