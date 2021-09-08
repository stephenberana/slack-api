import React, {
  useRef,
  useState,
  createContext,
  useEffect,
} from "react";
import axios from "axios";
import { API } from "../../App.js";

var userChannels = JSON.parse(localStorage.getItem("userChannels"));
var numberOfChannels = userChannels.data.length
var channelList = []
for (let i = 0; i < numberOfChannels; i++) {
    channelList.push(userChannels.data[i])
}
var selectedChannel = null;

const sidebarChannelList = channelList.map((channel) =>
<div className="channel-name" key={channel.id} data-key={channel.id}>
  {channel.name}
</div>
);

 const GetChannelMessages = (e) => {
  console.log(e.target.getAttribute('data-key'));
  selectedChannel = e.target.getAttribute('data-key');
  var {userHeaders, userData} = false;
  userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
  userData = JSON.parse(localStorage.getItem("loginData"));
  axios({
    url: `${API}/api/v1/messages?receiver_id=${selectedChannel}&receiver_class=Channel`,
    method: "GET",
    headers: userHeaders,
  })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

 const ChannelList = (props) => {
    return (
        <div className="channel-list" onClick={GetChannelMessages}>{sidebarChannelList}</div>
    );
  };

  export default ChannelList;

  