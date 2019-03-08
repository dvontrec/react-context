import React, { Component } from 'react';
// import context
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  // Hooks up context object to class based component
  static contextType = LanguageContext;

  render() {
    return (
      <button className="ui button primary">
        {/* Uses the context consumer to acces the values in context */}
        <LanguageContext.Consumer>
          {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
