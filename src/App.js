import React from "react";
import { useState } from "react";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import SendMessage from "./components/SendMessage";
export const API = "http://206.189.91.54";

function App() {
  const [loginHeaders, setLoginHeaders] = useState({});

  return (
    <div className="App">
      {/* <UserRegistration /> */}
      <Login setLoginHeaders={setLoginHeaders} />
      {/* <SendMessage /> */}
    </div>
  );
}

export default App;
