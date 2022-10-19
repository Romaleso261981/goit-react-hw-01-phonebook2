import { ContactItem, List } from './ContactList.styled';

const ContactList = ({ contactsData }) => {
  return (
    <List>
      {contactsData.map(contact => (
        <ContactItem key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => {
              console.log(contact.id);
            }}
          >
            Delete
          </button>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
