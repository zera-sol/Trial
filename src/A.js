import React, { useState } from 'react';
import ComponentB from './B';

function ComponentA() {
  const [x, setX] = useState(0); // State variable x and its setter function setX

  const handleClick = () => {
    setX(x + 1); // Increment x by 1 when the button is clicked
  };

  return (
    <div>
      <h2>Component A</h2>
      <button onClick={handleClick}>Increment X</button>
      <p>Value of X: {x}</p>
      <ComponentB x={x} /> {/* Pass the value of x as a prop to ComponentB */}
    </div>
  );
}

export default ComponentA;