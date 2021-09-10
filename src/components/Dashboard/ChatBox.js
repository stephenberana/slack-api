import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";
import "./chatbox.css";

 const ChatBox = (props) => {

    const body = useRef(null);
    const receiver_id = useRef(null);
    const receiver_class = useRef(null);
  
    const { handleSubmit } = useForm({});
  
    const submitForm = (data) => {
      var userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
      const message = {
        receiver_id: JSON.parse(localStorage.getItem("receiverkey")),
        receiver_class: localStorage.getItem("receiverclass"),
        body: body.current.value,
      };
      console.log(message);
  
      axios({
        url: `${API}/api/v1/messages?receiver_id=${message.receiver_id}&receiver_class=${message.receiver_class}&body=${message.body}`, 
        method: "POST",
        data: message,
        headers: userHeaders,
      })
        .then((response) => {
          console.log(response);
          console.log(message);
        })
        .catch(function (error) {
          console.log("errorrr")
          console.log(error);
        });
    };
    return (
      <div className="channel-container">
        <div className="channel-content">test
        </div>
        <div className="channel-send">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              className="inputField"
              type="text"
              name="body"
              ref={body}
              placeholder="Input message here."
            />
            <button className="channel-submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default ChatBox;
     
