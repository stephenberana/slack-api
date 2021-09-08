import { useRef, React } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const SendMessage = (props) => {
  const receiver = useRef(null);
  const receiverclass = useRef(null);
  const body = useRef(null);

  const { handleSubmit } = useForm({});

  const submitForm = (data) => {
    const messageLog = {
      receiver_id: parseInt(receiver.current.value),
      receiver_class: receiverclass.current.value,
      body: body.current.value,
    };
    console.log(messageLog);

    axios({
      url: "http://206.189.91.54/api/v1/auth/messages",
      method: "POST",
      data: messageLog,
      headers: config,
    })
      .then((response) => {
        console.log(response);
        console.log(response.headers.uid);
        console.log(response.headers.expiry);
        console.log(response.headers.client);
        console.log(data);
        props.setAccessToken(response.headers["access-token"]);
        props.setUid(response.headers.uid);
        props.setExpiry(response.headers.expiry);
        props.setClient(response.headers);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded, charset=UTF-8",
      Accept: "application/json",
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>Message</label>
        <input
          type="text"
          name="sendtext"
          ref={body}
          placeholder="Enter your message here."
        />
        <input
          type="number"
          name="receiver"
          ref={receiver}
          placeholder="Enter UID of receiver."
        />
        <input
          type="text"
          name="receiverclass"
          ref={receiverclass}
          placeholder="Enter user class."
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
