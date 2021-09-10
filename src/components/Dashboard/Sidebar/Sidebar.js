import {React, useState} from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import AddChannel from "../AddChannel"
import AddDM from "../AddDM"
import CheckDM from "../CheckDM"
import ModalChannel from "../../Modal/ModalChannel"
import ModalDM from "../../Modal/ModalDM"
import ModalDMList from "../../Modal/ModalDMList"
import ChannelList from "../ChannelList"
import '../../Collapsible/Collapsible.css';

const Sidebar = () => {
  const [showchannel, setShowChannel] = useState(false);
  const [showdm, setShowDM] = useState(false);
  const [showdmlist, setShowDMList] = useState(false);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          IskolarChat
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <button onClick={() => setShowChannel(true)}>New Channel</button><ModalChannel title="Add Channel" onClose={() => setShowChannel(false)} showchannel={showchannel}><AddChannel /></ModalChannel>
      <ChannelList />
      <div id="channel-list"></div>
      <button onClick={() => setShowDM(true)}>New Direct Message</button><ModalDM title="DM Another User" onClose={() => setShowDM(false)} showdm={showdm}><AddDM /></ModalDM>
      <button onClick={() => setShowDMList(true)}>Check DMs</button><ModalDMList title="Check DMs" onClose={() => setShowDMList(false)} showdmlist={showdmlist}><CheckDM /></ModalDMList>
    </SidebarContainer>
  );
};

<div />;
export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  font-family: 'Urbanist';
  background-color: #561621;
  flex: 0.3;
  border-top: 1px solid #7b1113;
  width: 200px;
  min-width: 200px;
  position: fixed;
  padding-top: 70px;
  height: 100%;
  > hr {
    margin-top: 10px;
    margin-bottom: 1px;
    border: 1px solid #ffb81c;
  }
  > button {
    background-color: #561621;
    color: white;
    cursor: pointer;
    padding: 3%;
    width: 100%;
    border: none;
    text-align: left;
    font-size: 15px;
    border-radius: 0;
    margin-bottom: 0px;
  }
  > button:hover {
    background-color: #00573e;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #7b1113;
  font-family: 'Urbanist';
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #7b1113;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    color: white;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
