import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  // assigns context from language context object
  static contextType = LanguageContext;
  render() {
    // set the text variable to be set based on context
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
