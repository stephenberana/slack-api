import React, { Component } from "react";
import AddChannel from "./SidebarOption"

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <AddChannel />
    </div>
   </div>
  );
 }
}