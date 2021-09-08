import axios from "axios";
import React, {
  useRef,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
import { API } from "../App.js";

var userHeaders = null;
export const UserContext = createContext({});
export const UserContextProvider = (props) => {
  var { id, member_id, uid, client, expiry } = useRef(null);

  userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
  var config = {
    headers: userHeaders,
  };
}

const GetChannels = () => {

  const [channel, setChannel] = useState([]);
  useEffect(() => {
    axios({
      url: `${API}/api/v1/channels`,
      method: "GET",
      headers: userHeaders,
    })
      .then((response) => {
        setChannel(response.channel);
        console.log("successss")
      })
      .catch((error) => console.log(error));
  }, [channel]);

}

export default GetChannels
