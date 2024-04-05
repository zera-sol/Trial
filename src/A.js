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
function findLargestNumber(arr){
  let max= 0;
      for(let i=0; i<arr.length; i++){
        if(arr[i] > max){}
      }
}
function MyComponent() {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowNotification(!showNotification);
  };
  return (
    <div>
      <h1>My first Component</h1>
      <button onClick={handleButtonClick}>Show Notification</button>
      {showNotification && <Notification message={<div><h3>Custom Alert</h3><p>This a paragraph writing techniques.</p></div>} onClose={handleCloseNotification} />}
    </div>
  );
}

export default MyComponent;
