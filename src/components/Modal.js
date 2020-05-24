import React, { Component } from 'react';

class Modal extends Component {
  input = React.createRef();
  closeBtn = React.createRef();

  handleKeyDown(event) {
    // Modal Trap
    if (event.keyCode === 9) { // tab
      if (event.shiftKey) { // shift + tab
        if (event.target === this.input.current) { // first widget
          event.preventDefault();
          this.closeBtn.current.focus(); // Go to the last widget
        }
      } else { // tab only
        if (event.target === this.closeBtn.current) { // last widget
          event.preventDefault();
          this.input.current.focus(); // Return to the first widget
        }
      }
    } else if (event.keyCode === 27) { // esc
      this.props.closeModal();
    }
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    const {closeModal, setPlace} = this.props;

    return (
      <div 
        id="modal-background"
        onClick={function(event) {
          if (event.target.id === 'modal-background') {
            closeModal();
          }
        }}
      >
        <div 
          id="modal"
          role="dialog"
          aria-label="select a place to explore its restaurants"
        >
          <form 
            id="select-place-form"
            onSubmit={event => {
              event.preventDefault();
              setPlace(this.input.current.value)
            }}
          >
            <div>
              <label htmlFor="place">Place: </label>
              <input 
                ref={this.input} 
                type="text" 
                id="place"
                onKeyDown={event => this.handleKeyDown(event)}
                required
              />
              <ul id="description">
                <li>Could be a country, city or neighborhood (e.g. USA, Chicago, Gary).</li>
                <li>It should be written properly in English.</li>
              </ul>
            </div>
            <div id="submit-container">
              <button id="submit-btn" type="submit">submit</button>
            </div>
          </form>
          <button 
            ref={this.closeBtn}
            id="close-btn" 
            type="button"
            onClick={closeModal}
            onKeyDown={event => this.handleKeyDown(event)}    
          >
            <abbr title="Close">⤫</abbr>
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;