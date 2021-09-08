import React, { useContext, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";

 const AddChannel = (props) => {
    var userHeaders = useContext(UserContext);
    var channelList = [];
    console.log(userHeaders.data.headers)  
    const name = useRef(null);
    const user_ids = useRef(null);
  
    const { handleSubmit } = useForm({});
  
    const submitForm = (data) => {
      const channel = {
        name: name.current.value,
        user_ids: JSON.parse("[" + user_ids.current.value + "]")
      };
      console.log(channel);
  
      axios({
        url: `${API}/api/v1/channels`, 
        method: "POST",
        data: channel,
        headers: userHeaders.data.headers,
      })
        .then((response) => {
          console.log(response);
          console.log(channel);
          channelList.push(response);
          console.log(channelList)
        })
        .catch(function (error) {
          console.log("errorrr")
          console.log(error);
        });
    };

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
              name="name"
              ref={name}
              placeholder="Enter channel name."
            />
            <br />
  
            <label className="channel-label">Members</label>
            <input
              className="inputField"
              type="text"
              name="user_ids"
              ref={user_ids}
              placeholder="Input user IDs of members."
            />
  
            <button className="channel-submit" type="submit">
              Create Channel
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default AddChannel;