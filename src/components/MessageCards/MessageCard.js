// src/components/MessageCard.js
import React from "react";
import "./MessageCard.css";

const MessageCard = ({ message }) => {
  return (
    <div className="message-card">
      <p>{message}</p>
    </div>
  );
};

export default MessageCard;
