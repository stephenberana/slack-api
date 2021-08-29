import axios from "axios";
import React, { useState } from "react";

export default function UserRegistration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  console.log(email, password, password_confirmation);

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  function onUserRegistration(e) {
    e.preventDefault();
    const postData = {
      email,
      password,
      password_confirmation,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post({
        url: "http://206.189.91.54/api/v1/auth",
        data: postData,
        headers: config,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const passwordConfirmation = (password, password_confirmation) => {
    if (password !== password_confirmation) {
      alert("Please make sure that both passwords match.");
      return false;
    } else return true;
  };

  return (
    <form onSubmit={onUserRegistration}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Input email"
      />
      <br />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Input password"
      />

      <br />

      <label>Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        value={password}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        placeholder="Confirm password"
      />

      <button type="submit" onSubmit={() => passwordConfirmation}>
        Submit
      </button>
    </form>
  );
}
