import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

export default function UserRegistration() {
  const email = useRef(null);
  const password = useRef(null);
  const password_confirmation = useRef(null);

  // console.log(email, password, password_confirmation);

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const { handleSubmit } = useForm();

  const submitForm = (data) => {
    const postData = {
      email: email.current.value,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
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
      Accept: "application/json",
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
      <input type="email" name="email" ref={email} placeholder="Input email" />
      <br />

      <label>Password</label>
      <input
        type="password"
        name="password"
        ref={password}
        placeholder="Input password"
      />

      <br />

      <label>Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        ref={password_confirmation}
        placeholder="Confirm password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
