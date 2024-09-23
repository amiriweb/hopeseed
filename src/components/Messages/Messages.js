// src/components/Messages.js
import React, { useEffect, useState } from "react";
import MessageCard from "../MessageCards/MessageCard";

const Messages = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Cycle through messages every 5 seconds (optional)
  useEffect(() => {
    if (messages.length > 0) {
      const interval = setInterval(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [messages]);

  const displayedMessage =
    messages.length > 0
      ? messages[currentMessageIndex]
      : "No messages at the moment.";

  return (
    <div className="messages-section">
      <div className="messages-header">
        <h3>Messages</h3>
      </div>
      <div className="messages-list">
        {/* Render the rotating message */}
        <MessageCard message={displayedMessage} />
      </div>
    </div>
  );
};

export default Messages;
