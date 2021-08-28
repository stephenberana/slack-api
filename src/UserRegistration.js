import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const UserRegistration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  axios({
    method: "post",
    url: "http://206.189.91.54/api/v1/auth/",
    data: {
      data: {
        email: "",
        password: "",
        password_confirmation: "",
      },
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} placeholder="Input email" />
      <br />

      <label>Password</label>
      <input {...register("password")} placeholder="Input password" />

      <br />

      <label>Confirm Password</label>
      <input
        {...register("password_confirmation")}
        placeholder="Input password"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserRegistration;
