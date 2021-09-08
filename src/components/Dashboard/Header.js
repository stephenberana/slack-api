import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTimeIcon } from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Header Left*/}
      <HeaderLeft>
      <HelpOutlineIcon />
      </HeaderLeft>
      {/* <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search Maroons Slack" />
      </HeaderSearch> */}
      <HeaderRight>
      <HeaderAvatar //TODO addonClick
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #7b1113;
  color: white;
  z-index: 2;
  padding: 1%;
`;

const HeaderLeft = styled.div`
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 0 50px;
  height: 50px;
  > input {
    color: white;
    height: 80%;
    margin-top: 10px;
  }
  > .MuiSvgIcon-root {
    align-self: center;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;