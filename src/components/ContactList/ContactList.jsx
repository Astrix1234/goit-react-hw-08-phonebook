import ContactItem from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    // console.log('Deleting contact with ID:', contactId);
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map((contact, index) => (
        <ContactItem
          key={`${contact.id}-${index}`}
          {...contact}
          onDelete={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
