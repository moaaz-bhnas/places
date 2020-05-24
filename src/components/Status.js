import React from 'react';

const Status = props => {
  return (
    <p
      id="status" 
      role="status" 
      aria-live="polite" 
      aria-atomic="true"
    >
      {props.restaurantsCount} restaurants
    </p>
  );
}

export default Status;
