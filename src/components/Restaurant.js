import React from 'react';

const Restaurant = React.forwardRef((props, ref) => {
  const {name, index, tabIndex, openInfoWindow, handleKeyDown} = props;

  return (
    <li>
      <button 
        ref={ref}
        type="button"
        role="menuitem"
        tabIndex={tabIndex}
        onClick={() => openInfoWindow(name)}
        onKeyDown={event => handleKeyDown(event, index)}
      >
        {name}
      </button>
    </li>
  );
})

export default Restaurant;
