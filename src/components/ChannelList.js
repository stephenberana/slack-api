import React, { useContext, useRef } from "react";

var userChannels = JSON.parse(localStorage.getItem("userChannels"));
var numberOfChannels = userChannels.data.length
var channelList = []
for (let i = 0; i < numberOfChannels; i++) {
    channelList.push(userChannels.data[i].name)
}
var userChannelOne = userChannels.data[0].name;

const sidebarChannelList = channelList.map((channel) =>
  <div>{channel}<br /></div>
);

 const ChannelList = (props) => {
    return (
      <div className="channel-container">
        <p>{sidebarChannelList}</p>
      </div>
    );
  };

  export default ChannelList;