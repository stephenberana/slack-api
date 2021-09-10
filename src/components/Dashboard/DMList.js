import React, { useContext, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";

 const DMList = (props) => {
    var userHeaders = useContext(UserContext);
    console.log(userHeaders.data.headers)  
    const receiver_id = useRef(null);
  
    const { handleSubmit } = useForm({});
  
    const submitForm = (data) => {
      const message = {
        receiver_id: receiver_id.current.value,
      };
      console.log(message);
  
      axios({
        url: `http://206.189.91.54/api/v1/messages?receiver_id=${message.receiver_id}&receiver_class=User`, 
        method: "GET",
        data: message,
        headers: userHeaders,
      })
        .then((response) => {
          console.log(message.receiver_id)
          console.log(response);
          console.log(response.data.data)
          localStorage.setItem("allDMs", JSON.stringify(response.data.data));
          console.log(message);    
        })
        .catch(function (error) {
          console.log("errorrr")
          console.log(error);
        });
    };

    var dmMessageList = null;
    var allDMs = JSON.parse(localStorage.getItem("allDMs"));
    console.log(allDMs);
    var messageList = [];
    for (let i = 0; i < allDMs.length; i++) {
      messageList.push(allDMs[i])
    dmMessageList = messageList.map((dm) =>
    <div className="message" key={dm.id} data-key={dm.id}>
      <div className="message-top">
      <div className="message-sender">{dm.sender.email.substring(0, dm.sender.email.indexOf('@') != -1 ? dm.sender.email.indexOf('@') : dm.sender.email.length)}</div>
      {/* <div className="message-timedate">{JSON.stringify(parseInt(JSON.stringify(dm.created_at).slice(12,14))+8)}:{JSON.stringify(dm.created_at).slice(15,17)}</div> */}
      </div>
      <div className="message-body">{dm.body}</div>
    </div>
    )}
    console.log(dmMessageList)      


    return (
      <div className="channel-container">
        <div className="channel"></div>
        <div className="channel">
          <form onSubmit={handleSubmit(submitForm)}>
            <label className="channel-label">Channel</label>
            <input
              style={{ marginTop: "16px" }}
              className="inputField"
              type="text"
              name="receiver_id"
              ref={receiver_id}
              placeholder="Enter your friend's user ID."
            />
            <br />
            <button className="channel-submit" type="submit">
              Create Channel
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default DMList;