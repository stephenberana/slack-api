import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function UserRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  // console.log(email, password, password_confirmation);

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const { handleSubmit } = useForm({});

  const submitForm = (data) => {
    const postData = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    console.log(postData);
    axios({
      url: "http://206.189.91.54/api/v1/auth",
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
      "Accept": "application/json",
    },
  };

  // const passwordConfirmation = (password, password_confirmation) => {
  //   if (password !== password_confirmation) {
  //     alert("Please make sure that both passwords match.");
  //     return false;
  //   } else return true;
  // };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value) || console.log(`Email`, e.target.value)
        }
        placeholder="Input email"
      />
      <br />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value) || console.log("Password", e.target.value)
        }
        placeholder="Input password"
      />

      <br />

      <label>Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        value={password_confirmation}
        onChange={(e) =>
          setPasswordConfirmation(e.target.value) ||
          console.log("Confirm password", e.target.value)
        }
        placeholder="Confirm password"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}
