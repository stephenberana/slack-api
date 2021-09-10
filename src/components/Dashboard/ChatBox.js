import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";
import "./chatbox.css";
import useLocalStorage from "use-local-storage";

const ChatBox = ({ channelName, channelId }) => {
  var chatboxMessageList = null;
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
        console.log("errorrr");
        console.log(error);
      });
  };

  // var channelMessages = JSON.parse(localStorage.getItem("channelmessages"));

  // var numberOfMessages = channelMessages.length
  // var messageList = []
  // for (let i = 0; i < numberOfMessages; i++) {
  //   messageList.push(channelMessages[i])
  // chatboxMessageList = messageList.map((message) =>
  // <div className="message" key={message.id} data-key={message.id}>
  //   <div className="message-sender">sender: {message.sender.email.substring(0, message.sender.email.indexOf('@') != -1 ? message.sender.email.indexOf('@') : message.sender.email.length)}</div>
  //   <div className="message-body">{message.body}</div>
  //   <div className="message-timedate">time: {JSON.stringify(parseInt(JSON.stringify(message.created_at).slice(12,14))+8)}:{JSON.stringify(message.created_at).slice(15,17)} | date: {JSON.stringify(message.created_at).slice(1,11)}</div>
  // </div>

  // )

  return (
    <div className="channel-container">
      <div className="channel-content">{chatboxMessageList}</div>
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
