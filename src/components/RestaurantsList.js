import React, { Component } from 'react';
import Restaurant from './Restaurant';

class RestaurantsList extends Component {
  state = {
    focusableIndex: 0
  }

  // Storing refs for all items, so I can manage focus between them
  references = Array(20).fill(0).map(() => React.createRef()); // 20 is the maximum number of restaurants

  handleKeyDown(event, currentIndex) {
    const interactiveKeys = {
      35: 'end',
      36: 'home',
      38: 'up',
      40: 'down'
    };
  
    const interactiveKeyPressed = (event.keyCode === 35) || (event.keyCode === 36) || (event.keyCode === 38) || (event.keyCode === 40);
    if (interactiveKeyPressed) {
      event.preventDefault();
      // (1) Determine the next menuitem depending on the direction
      const direction = interactiveKeys[event.keyCode];
      const nextIndex = this.determineNextIndex(currentIndex, direction);
  
      // (2) Using the nextIndex, update the focusable item, so we get back to it when navigating through the page
      this.setState({
        focusableIndex: nextIndex
      })

      // (3)
      this.blurAndFocus(currentIndex, nextIndex);
    }
  }

  determineNextIndex(currentIndex, direction) {
    const {restaurants} = this.props;
    const lastIndex = restaurants.length-1;
    let nextIndex;
    switch (direction) {
      case 'down':
        if (currentIndex === lastIndex) {
          nextIndex = 0;
        } else {
          nextIndex = currentIndex + 1;
        }
        break;
      case 'up':
        if (currentIndex === 0) {
          nextIndex = lastIndex;
        } else {
          nextIndex = currentIndex - 1;
        }
        break;
      case 'home':
        nextIndex = 0;
        break;
      case 'end':
        nextIndex = lastIndex;
        break;
    }
    return nextIndex;
  }

  blurAndFocus(currentIndex, nextIndex) {
    this.references[currentIndex].current.blur();
    this.references[nextIndex].current.focus();
  }

  render() {
    const {restaurants, openInfoWindow, sidebarShown} = this.props;

    const tabIndexes = Array(restaurants.length).fill('-1');
    // The focusable menu item
    if (sidebarShown) {
      tabIndexes[this.state.focusableIndex] = '0';
    }
    
    return (
      <ul 
        id="restaurants-list"
        role="menu"
      >
        {
          restaurants.map((restaurant, index) => {
            return (
              <Restaurant 
                ref={this.references[index]}
                name={restaurant.venue.name}
                index={index}
                tabIndex={tabIndexes[index]}
                key={index} 
                openInfoWindow={openInfoWindow}
                handleKeyDown={(event, currentIndex) => this.handleKeyDown(event, currentIndex)}
              />
            );
          })
        }
      </ul>
    );
  }
}

export default RestaurantsList;