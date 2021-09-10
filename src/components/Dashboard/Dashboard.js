import React from "react";
import { API } from "../../App";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import styled from "styled-components";
import Chat from "./Chat";

var userHeaders = null;
var userData = null;
var userChannels = null;
userData = JSON.parse(localStorage.getItem("loginData"));
userHeaders = JSON.parse(localStorage.getItem("loginHeaders"));

axios({
  url: `http://206.189.91.54/api/v1/channels`,
  method: "GET",
  headers: userHeaders,
})
  .then((response) => {
    userChannels = response.data.data;
    localStorage.setItem("userChannels", JSON.stringify(userChannels));
    })
  .catch((error) => console.log(error));


const Dashboard = (props) => {
  return (
    <DashBody>
      <Header /><br />
      <Chat />
      <Sidebar />
    </DashBody>
  );
};

export default Dashboard;

const DashBody = styled.div`
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "chat"
    "footer";
`;