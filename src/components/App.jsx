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
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    // const { contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();
    console.log('filteredContacts', filteredContacts);
    return (
      <>
        <ContactForm addContact={this.addContact} value={20} />
        <input type="text" onChange={this.handleFilter} />
        {filteredContacts.length > 0 ? (
          <ContactList contactsData={filteredContacts} />
        ) : (
          <Notification message="No contacts yet" />
        )}
      </>
    );
  }
}
