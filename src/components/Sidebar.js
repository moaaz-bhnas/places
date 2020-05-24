import React from 'react';
import Status from './Status';
import RestaurantsList from './RestaurantsList';
import SearchInput from './SearchInput';

const Sidebar = props => {
  const {sidebarShown, restaurantsCount, restaurants, openInfoWindow, updateQuery} = props;
  return (
    <div 
      id="sidebar" 
      data-shown={sidebarShown ? "true" : "false"}
    >
      <SearchInput 
        updateQuery={query => updateQuery(query)} 
        sidebarShown={sidebarShown}
      />
      <Status restaurantsCount={restaurantsCount} />
      <RestaurantsList 
        restaurants={restaurants} 
        openInfoWindow={openInfoWindow} 
        sidebarShown={sidebarShown}
      />
    </div>
  );
}

export default Sidebar;