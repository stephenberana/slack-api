import React, { useContext, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";

 const AddDM = (props) => {
   
    const receiver_id = useRef(null);
    const body = useRef(null);
  
    const { handleSubmit } = useForm({});
  
    const submitForm = (data) => {
      var userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
      const message = {
        receiver_id: receiver_id.current.value,
        receiver_class: "User",
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
            })
            .catch(function (error) {
              console.log("errorrr")
              console.log(error);
            });
        
        })
        .catch(function (error) {
          console.log("errorrr")
          console.log(error);
        });

    }
    return (
      <div className="channel-container">
        <div className="channel"></div>
        <div className="channel">
          <form onSubmit={handleSubmit(submitForm)}>
            <label className="channel-label">User</label>
            <input
              style={{ marginTop: "16px" }}
              className="inputField"
              type="text"
              name="receiver_id"
              ref={receiver_id}
              placeholder="Enter user ID."
            />
            <br />
  
            <label className="channel-label">Message</label>
            <input
              className="inputField"
              type="text"
              name="body"
              ref={body}
              placeholder="Say hi!"
            />
  
            <button className="channel-submit" type="submit">
              Send DM!
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default AddDM;