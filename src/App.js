import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* <form className="registration" onSubmit={() => UserRegistration}>
        <h1>User Registration</h1>
        <input
          type="email"
          className="email"
          placeholder="Enter your username"
        ></input>
        <br />
        <input
          type="password"
          className="password"
          placeholder="Enter your password"
        ></input>
        <br />
        <input
          type="password"
          className="password2"
          placeholder="Confirm your password"
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form> */}

      {/* <UserRegistration /> */}
      <Login />

    </div>
  );
}

export default App;
