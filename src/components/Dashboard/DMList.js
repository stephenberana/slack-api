import React, { useContext, useRef } from "react";

var userDMs = JSON.parse(localStorage.getItem("userChannels"));
var numberOfDMs = userDMs.data.length
var dmsList = []
for (let i = 0; i < numberOfDMs; i++) {
    dmsList.push(userDMs.data[i].name)
}
var userDMsOne = userDMs.data[0].name;

const sidebarDMList = dmsList.map((dm) =>
  <div>{dm}<br /></div>
);

 const DMList = (props) => {
    return (
        <div className="dm-list">{sidebarDMList}</div>
    );
  };

  export default DMList;