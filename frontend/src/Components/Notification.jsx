import React from "react";
import '../Style/Footer.css'

const Notification = ({ message, onClose, type }) => {
    return (
      <div className={`notification ${type} flex gap-4 items-center justify-center p-2`}>
        <p>{message}</p>
        <button onClick={onClose} className="close-btn pl-2 pr-2">x</button>
      </div>
    );
  };
  
  export default Notification;