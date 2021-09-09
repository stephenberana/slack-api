import React, {createContext, useState} from 'react';
import ChannelList from "../Dashboard/ChannelList"

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const ChannelsCollapsible = () => {
    return (
        <div>
<button className="collapsible">Channels</button><div className="content"><ChannelList />.</div>

        </div>
    )
}
export default ChannelsCollapsible; 
