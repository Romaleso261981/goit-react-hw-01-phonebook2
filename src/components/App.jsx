import {
  FilterInput,
  NotificationSpan} from './AppStyle.js';
import { Component } from 'react';
import Notification from './Notification/Notification';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  addContact = contact => {
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      localStorage.user = JSON.stringify([...prevState.contacts, newContact]);
      console.log(localStorage.user);
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    const contacts  = this.state;
    console.log(contacts);
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    // const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    console.log('filteredContacts', filteredContacts);
    return (
      <>
        <ContactForm addContact={this.addContact} value={20} />
        <FilterInput type="text" onChange={this.handleFilter} />
        {filteredContacts.length > 0 ? (
          <ContactList
            contactsData={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
            <NotificationSpan>
            <Notification message="No contacts yet" />
            </NotificationSpan>
          
        )}
      </>
    );
  }
}
