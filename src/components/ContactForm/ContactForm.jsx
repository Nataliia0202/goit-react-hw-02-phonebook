import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
    ContactFormStyle,
    LabelForm,
    InputForm,
    ButtonForAdd,
} from 'components/ContactForm/ContactForm.styled';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <ContactFormStyle>
        <LabelForm>Name</LabelForm>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <LabelForm>Number</LabelForm>
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonForAdd type="submit">Add contact</ButtonForAdd>
      </ContactFormStyle>
    );
  }
}