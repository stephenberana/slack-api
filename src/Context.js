import axios from "axios";
import React, {
  useRef,
  useState,
  createContext,
  useEffect,
} from "react";
import { API } from "./App.js";

var userHeaders = null;
userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));

export const UserContext = createContext({});
export const UserContextProvider = (props) => {
  var { id, member_id, uid } = useRef(null);

  //setting user session
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: `${API}/api/v1/users`,
      method: "GET",
      headers: userHeaders,
    })
      .then((response) => {
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ data }}>
      {props.children}
    </UserContext.Provider>
  );
};
