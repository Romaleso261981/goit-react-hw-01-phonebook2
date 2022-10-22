import { FilterInput, NotificationSpan } from './AppStyle.js';
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
    console.log('addContact');
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  deleteContact = id => {
    console.log(id);
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const savedSettings = localStorage.getItem('contacts');
    let localContact = JSON.parse(savedSettings);
    if (localContact === null) {
      localContact = this.state;
    }
       
    return localContact;
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
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
