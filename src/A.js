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
// $ git commit -m "commmit 1"
// Auto packing the repository in background for optimum performance.
// See "git help gc" for manual housekeeping.
// Enumerating objects: 18, done.
// Counting objects: 100% (6/6), done.
// Delta compression using up to 2 threads
// Compressing objects: 100% (6/6), done.
// Writing objects: 100% (6/6), done.
// Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
// Removing duplicate objects: 100% (256/256), done.


function ommitRepeation(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
    if(arr.indexOf(str[i]) < 0){
      arr.push(str[i])
    }
  }
  return arr.join("")
}
function countDigits(number) {
    // Convert the number to a string
    let numArray = []
    let numString = String(number);
    
    // Calculate the length of the string (number of digits)
    let numDigits = numString.length;
    
    for(let i =numDigits -1; i>= 0; i--){
      numArray.push(numString[i])
   }
  return Number(numArray.merge(""));
}
 

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
  console.log(fibSeq);
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
