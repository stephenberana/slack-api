import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Context";

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  const { data } = useContext(UserContext);
  return (
    <SidebarOptionContainer
    >
      {Icon && <Icon fontSize="large" style={{ padding: 10 }} />}
      {Icon ? (
        <div>{title}</div>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #00573e;
  }
`;

const SidebarOptionChannel = styled.div``;