import React, { useState } from 'react';

function Notification({ message, onClose }) {
  return (
    <div className="notification">
      <div className="notification-content">
        {message}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function MyComponent() {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleButtonClick}>Show Notification</button>
      {showNotification && <Notification message={<div><h3>Custom Alert</h3><p>This is a custom alert message!</p></div>} onClose={handleCloseNotification} />}
    </div>
  );
}

export default MyComponent;
