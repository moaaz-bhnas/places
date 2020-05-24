import React, { Component } from 'react';
import menuIcon from '../icons/menu.svg';

class Header extends Component {
  state = { 
    smallScreen: null
  }

  detectScreenWidth = () => {
    const smallBreakPoint = 528;
    const screenWidth = window.innerWidth;
    const {smallScreen} = this.state;
    if (screenWidth > smallBreakPoint && smallScreen) {
      this.setState({
        smallScreen: false
      })
    } else if (screenWidth < smallBreakPoint && !smallScreen) {
      this.setState({
        smallScreen: true
      })
    }
  }

  componentDidMount() {
    this.detectScreenWidth();
    window.addEventListener('resize', this.detectScreenWidth)
  }

  render() {
    const {smallScreen} = this.state;
    const {sidebarShown, modalOpened, openModal, toggleSidebar} = this.props; 
    return (
      <header id="main-header" role="banner">
        <h1>Places</h1>
        <button 
          type="button" 
          id="menu-btn"
          onClick={toggleSidebar}
          aria-controls="sidebar"
          aria-pressed={sidebarShown ? "true" : "false"}
          aria-expanded={sidebarShown ? "true" : "false"}
        >
          <img 
            src={menuIcon} 
            alt="Menu Icon" 
          />
        </button>
        <button
          type="button"
          id="place-btn"
          onClick={openModal}
          aria-controls="modal"
          aria-pressed={modalOpened ? "true" : "false"}
          aria-expanded={modalOpened ? "true" : "false"}
        >
          change place
        </button>
      </header>
    );
  }
}

export default Header;
