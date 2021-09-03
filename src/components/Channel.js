import React from "react";

const renderChannel = (props) => {
  const displayChannels = (props) => {
    const { channels, allChannels } = props;
  };

  if (allChannels !== undefined && allChannels.length > 0) {
    return allChannels.map((allChannels, index) => {
      console.log(allChannels);
      return (
        <div>
          {allChannels.name}
          {displayChannels(props)}
        </div>
      );
    });
  } else {
    return <h3> No available channels yet </h3>;
  }
};

export default renderChannel;
