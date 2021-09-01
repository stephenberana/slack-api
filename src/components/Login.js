import { useRef, React } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const { handleSubmit } = useForm({});

  const submitForm = (data) => {
    const postData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(postData);

    axios({
      url: "http://206.189.91.54/api/v1/auth/sign_in",
      method: "POST",
      data: postData,
      headers: config,
    })
      .then((response) => {
        console.log(response);
        console.log(response.headers.uid);
        console.log(response.headers.expiry);
        console.log(response.headers.access - token);
        console.log(response.headers.client);
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

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          ref={email}
          placeholder="Enter your email"
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={password}
          placeholder="Input password"
        />

        <span>
          New to Avion Slack? <a href="register-link">Register here.</a>
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
