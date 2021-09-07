import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../Context";

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  const { data } = useContext(UserContext);

  //adding channels
  const addChannel = (data) => {
    const channelName = prompt("Please enter the channel name.");
    const user = {
      id: id.current.value,
      member_id: member_id.current.value,
    };

    if (channelName) {
      axios({
        url: `${API}/api/v1/channel/add_member`,
        method: "POST",
        data: user,
        headers: userHeaders,
      })
        .then((response) => {
          console.log(response.headers);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    //modal input?
  };

  const selectChannel = () => {
    //target channel value
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="large" style={{ padding: 10 }} />}
      {title && <title style={{ color: "white" }} />}
      {Icon ? (
        <h3>{title}</h3>
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

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div``;
