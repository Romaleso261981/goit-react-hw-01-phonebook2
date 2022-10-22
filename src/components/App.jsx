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
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    // if (localStorageQueue.find(option => option.id === infoFilm.id)) {
    //   Notiflix.Notify.warning(`Фильм ${infoFilm.title || infoFilm.name} уже есть в QUEUE`, {
    //       position: 'left-top',
    //       showOnlyTheLastOne: false,
    //       clickToClose: true,
    //       timeout: 3000,
    //   });
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  deleteContact = id => {
    const contactArr = localStorage.getItem('contacts');
    const parseContactArr = JSON.parse(contactArr);
    console.log(parseContactArr);
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
