import React from 'react';

const SearchInput = props => {
  const {sidebarShown, query, updateQuery} = props;

  const searchRef = React.createRef();

  return (
    <form id="search-form">
      <input 
        ref={searchRef}
        aria-label="Search Restaurants"
        id="search-input"
        type="search"
        placeholder="Search Place ..."
        tabIndex={sidebarShown ? '0' : '-1'}
        value={query}
        onChange={event => updateQuery(event.target.value)}
      />
    </form>
  );
}

export default SearchInput;