import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value) || console.log(`Email`, e.target.value)
          }
          placeholder="Enter your email"
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value) ||
            console.log("Password", e.target.value)
          }
          placeholder="Input password"
        />

        <span>
          New to Avion Slack? <a href="register-link">Register here.</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
