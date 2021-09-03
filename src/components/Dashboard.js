import React from "react";
import { API } from "../../App";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = (props) => {
//   const [user, setUser] = useState({});
  const { id, member_id } = useRef(null)
  const [channel, setChannel] = useState({});

  const config = {
    headers: {
      "access-token": props.loginHeaders["access-token"],
      client: props.loginHeaders.client,
      expiry: props.loginHeaders.expiry,
      uid: props.loginHeaders.uid,
    },
  };

  const userSession = () => {
    const getUser = (data) => {
      axios({
        url: `${API}/api/v1/channels`,
        method: "GET",
        data: user,
        headers: config,
      })
        .then((response) => {
          setUser(response.data.data);
          console.log(response.headers);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    useEffect(() => {
      getUser();
    }, []);
  };

  //channel functions
  const channel = () => {
    const getChannel = (data) => {
      axios({
        url: `${API}/api/v1/channels`,
        method: "GET",
        headers: config,
      })
        .then((response) => {
          setChannel(response.data.data);
          console.log(response.headers);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    useEffect(() => {
      getChannel();
    }, []);

    //inviting user to a channel
    const createChannel = (data) => {
        const user = {
            id = id.current.value,
            member_id = member_id.current.value
        }
        axios({
            url: `${API}/api/v1/channel/add_member`,
            method: 'POST',
            data: user,
            headers: config,
        })
            .then((response) => {
                console.log(response.headers)
            })
            .catch(function (error) {
                console.log(error);
              });
          };
    }

    return (
      <div>
        <getUser userSession={userSession} />
        <renderChannel channel={channel} />
      </div>
    );
  };

export default Dashboard;
