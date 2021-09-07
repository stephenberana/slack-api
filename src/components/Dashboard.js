import React from "react";
import { API } from "../App";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Dashboard = (props) => {
  return (
    <DashBody>
      {/* <Nav />
        <Sidebar />
        <Window />
        <ChatBox /> */}
      <Sidebar />
      <h1 text="Dashboard" />
    </DashBody>
  );
};

export default Dashboard;

const DashBody = styled.div`
  height: 100vh;
`;
