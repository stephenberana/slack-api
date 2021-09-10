import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context";
import { API } from "../../App.js";
import ModalAddUser from "../Modal/ModalAddUser"

 const AddUser = (props) => {
    var userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));
    var selectedChannel = localStorage.getItem("receiverkey");
    const member_id = useRef(null);
  
    const { handleSubmit } = useForm({});
  
    const submitForm = (data) => {
      const user = {
        id: selectedChannel,
        member_id: member_id.current.value
      };
      console.log(user);
      console.log(userHeaders)
  
      axios({
        url: `http://206.189.91.54/api/v1/channel/add_member?id=${selectedChannel}&member_id=${user.member_id}`,
        method: "POST",
        data: user,
        headers: userHeaders,
      })
        .then((response) => {
          console.log(response);
          console.log(user);
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
            <label className="channel-label">User IDs</label>
            <input
              className="inputField"
              type="text"
              name="member_id"
              ref={member_id}
              placeholder="Input user IDs of members."
            />
  
            <button className="channel-submit" type="submit">
              Add user
            </button>
          </form>
        </div>
      </div>
    );
  };

  const AddUserToChannel = (props) => {
    const [showadduser, setShowAddUser] = useState(false);
  
    return (
        <div>
        <button className="add-button" onClick={() => setShowAddUser(true)}>+</button><ModalAddUser title="Add User" onClose={() => setShowAddUser(false)} showadduser={showadduser}><AddUser /></ModalAddUser>
        </div>
    );  
  }

  export default AddUserToChannel;