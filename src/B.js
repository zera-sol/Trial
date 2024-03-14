import React from 'react';

function ComponentB({ x }) { // Receive x as a prop
  // Use the value of x for some operations
  const doubleX = x * 2;

  return (
    <div>
      <h2>Component B</h2>
      <p>Double of X: {doubleX}</p>
    </div>
  );
}

export default ComponentB;