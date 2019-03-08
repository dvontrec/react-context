import React, { Component } from 'react';
// import context
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  // Hooks up context object to class based component
  static contextType = LanguageContext;

  render() {
    // if the context is set to english text is submit, if not it is voorleggen
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
