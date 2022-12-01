import React, { Component } from 'react';
import {
  GlobalStyle,
  MainTitle,
  // ContactsTitle,
  // WarningMessage,
} from './GlobalStyles';
import {ContactForm} from 'components/ContactForm/ContactForm'

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
        }}
      >
        <div>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm />
        </div>

        <GlobalStyle />
      </div>
    );
  }
  
};
