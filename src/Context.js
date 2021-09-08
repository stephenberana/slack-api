import axios from "axios";
import React, {
  useRef,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
import { API } from "./App.js";

export const UserContext = createContext({});
export const UserContextProvider = (props) => {
  var { id, member_id, uid, client, expiry } = useRef(null);

  var userHeaders = useRef(null);
  var userData = useRef(null);
  userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
  userData = JSON.parse(localStorage.getItem("loginData"));
  var config = {
    headers: userHeaders,
  };

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

  //uid
  uid = userHeaders.uid;

  //retrieving channels where client is invited
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    axios({
      url: `${API}/api/v1/channels/${id}`,
      method: "GET",
      headers: userHeaders,
    })
      .then((response) => {
        console.log("this is the id: " + userData.data.id)
        id = userData.data.id      
        console.log("these are the channels")
        console.log(response)
        setChannel(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // retrieving all messages in a channel
  const [channelMessage, setChannelMessage] = useState([]);
  useEffect(() => {
    axios({
      url: `${API}/api/v1/messages?receiver_id=${uid}&receiver_class=Channel`,
      method: "GET",
      headers: userHeaders,
    })
      .then((response) => {
        setChannelMessage(response.channelMessage);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [channelMessage]);

  // retrieving all messages with a user
  // const [userMessage, setUserMessage] = useState([]);
  // useEffect(() => {
  //   axios({
  //     url: `${API}/v1/messages?receiver_id=${uid}&receiver_class=User`,
  //     method: "GET",
  //     headers: userHeaders,
  //   })
  //     .then((response) => {
  //       console.log(response.headers);
  //       setUserMessage(response.userMessage);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [userMessage]);

  // creating Channel

  const createChannel = (data) => {
    const user = {
      id: id.current.value,
      member_id: member_id.current.value,
    };
    axios({
      url: `${API}/api/v1/channel/add_member`,
      method: "POST",
      data: user,
      headers: userHeaders,
    })
      .then((response) => {
        console.log(response.headers);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider value={{ data }}>
      {props.children}
    </UserContext.Provider>
  );
};
