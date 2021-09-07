import React from "react";
import { API } from "../App";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import Chat from "./Chat";

const Dashboard = (props) => {
  return (
    <DashBody>
      <Header />
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
