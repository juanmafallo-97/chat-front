import React from "react";

const SingleMessage = ({ message }) => {
  return (
    <div>
      hola
      <p>{message.author}</p>
      <p>{message.body}</p>
    </div>
  );
};

export default SingleMessage;
