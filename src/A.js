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
function countDigits(number) {
    // Convert the number to a string
    let numArray = []
    let numString = String(number);
    
    // Calculate the length of the string (number of digits)
    let numDigits = numString.length;
    
    for(let i =0; i< numDigits; i++){
      numArray.push(numString[i])
   }
  return numArray;
}

// Example number
let exampleNumber = 98765;

// Call the function to count the digits
let totalDigits = countDigits(exampleNumber);

console.log(The total number of digits in ${exampleNumber} is: ${totalDigits});


let numbers = [6,7,4,8,0,-2];
function findLargestNumber(arr){
  let max= 0;
      for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
          max = arr[i];
        }
      }
  return max; 
}
console.log(findLargestNumber(numbers))
function fibonacci(num){
  let fibSeq = [0, 1];
  for(let i=2; i < num; i++){
    let value = fibSeq[i-1] + fibSeq[i-2];
    fibSeq.push(value);
  }
  return fibSeq;
}
console.log(fibonacci(5))
function finMinimumNumber(arr){
  let minNumber = arr[0]
  for(let i = 1; i< arr.length; i++){
    if(arr[i] < minNumber){
      minNumber = arr[i]
    }
  }
  return minNumber;
}
console.log(findMinimumNumber(numbers))
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
