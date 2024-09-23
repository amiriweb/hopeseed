// src/components/Notification.js
import React, { useEffect } from "react";
import "./Notification.css"; // Import styles

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    // Auto-dismiss the notification after 5 seconds
    const timer = setTimeout(onClose, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification-popup">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
