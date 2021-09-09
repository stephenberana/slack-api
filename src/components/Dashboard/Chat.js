import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatBox from "./ChatBox";
import channelName from "./ChannelList"

const Chat = () => {
  return (
    <ChatContainer><br></br>
      <Header>
        <HeaderLeft>
          <h4>
            <strong></strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatBox />
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  overflow-y: scroll;
  color: #000;
  margin-left: 220px;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-top: 0px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div``;
