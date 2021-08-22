import React, { useState, useEffect } from "react";
import SingleMessage from "./SingleMessage";

const ChatMessages = ({ messages }) => {
  const renderMessages = () => {
    return messages.map((message, i) => {
      return <SingleMessage key={i} message={message} />;
    });
  };

  return (
    <div>
      <h2>mensajes</h2>
      {messages[0] && renderMessages()}
    </div>
  );
};

export default ChatMessages;
