import React, { useState } from "react";
import io from "socket.io-client";

const SendMessage = ({ handleMessageSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleChange} />
      <button onClick={() => handleMessageSubmit(message)}>Enviar</button>
    </div>
  );
};

export default SendMessage;
