import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatBox from "./ChatBox";
import channelName from "./ChannelList"

const Chat = (props) => {
  return (
    <ChatContainer><br></br><br></br>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>{props.channelname}</strong>
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
  color: #000;
  margin-left: 220px;
  margin-right: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
