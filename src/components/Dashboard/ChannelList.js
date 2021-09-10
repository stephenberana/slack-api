import React, {
  useRef,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";
import axios from "axios";
import { API } from "../../App.js";
 
var sidebarChannelList = null;

var userChannels = [];
var userChannelsLength = 0;
var userHeaders = null;
var userChannels = null;
userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));

axios({
  url: `http://206.189.91.54/api/v1/channels`,
  method: "GET",
  headers: userHeaders,
})
  .then((response) => {
    console.log("these are the channels")
    userChannels = response.data.data;
    console.log(userChannels);
    localStorage.setItem("userChannels", JSON.stringify(userChannels));
    userChannelsLength = userChannels.length;
    console.log(userChannels)
    var channelList = []
for (let i = 0; i < userChannelsLength; i++) {
    channelList.push(userChannels[i])
}

sidebarChannelList = channelList.map((channel) =>
<div className="channel-name" key={channel.id} data-key={channel.id} channel-name={channel.name}>
  {channel.name}
</div>
);
    })
  .catch((error) => console.log(error));

const GetChannelMessages = (e) => {
var selectedChannel = null;
var selectedChannelName = null;
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
