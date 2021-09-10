import React, {
  useRef,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";
import axios from "axios";
import { API } from "../../App.js";

var userChannels = JSON.parse(localStorage.getItem("userChannels"));
if ((userChannels = null)) {
  console.log("user channels not found");
}

var numberOfChannels = userChannels.data.length;
var channelList = [];
for (let i = 0; i < numberOfChannels; i++) {
  if (channelList === "0") {
    console.log("There are no channels.");
  } else {
    channelList.push(userChannels.data[i]);
  }
}

const sidebarChannelList = channelList.map((channel) => (
  <div
    className="channel-name"
    key={channel.id}
    data-key={channel.id}
    channel-name={channel.name}
  >
    {channel.name}
  </div>
));

var selectedChannel = null;
var selectedChannelName = null;

const GetChannelMessages = (e) => {
  console.log(e.target.getAttribute("data-key"));
  selectedChannel = e.target.getAttribute("data-key");
  selectedChannelName = e.target.getAttribute("channel-name");
  localStorage.setItem("receiverkey", selectedChannel);
  localStorage.setItem("receivername", selectedChannelName);
  localStorage.setItem("receiverclass", "Channel");
  var { userHeaders, userData } = false;
  userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
  userData = JSON.parse(localStorage.getItem("loginData"));
  axios({
    url: `${API}/api/v1/messages?receiver_id=${selectedChannel}&receiver_class=Channel`,
    method: "GET",
    headers: userHeaders,
  })
    .then((response) => {
      console.log(response);
      console.log(response.data.data);
      localStorage.setItem(
        "channelmessages",
        JSON.stringify(response.data.data)
      );
    })
    .catch(function (error) {
      console.log(error);
    });
};

const ChannelList = (props) => {
  return (
    <div className="channel-list" onClick={GetChannelMessages}>
      {sidebarChannelList}{" "}
    </div>
  );
};

export default ChannelList;
