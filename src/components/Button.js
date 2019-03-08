import React, { Component } from 'react';
// import context
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            {/* Uses the context consumer to acces the values in context */}
            <LanguageContext.Consumer>
              {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
