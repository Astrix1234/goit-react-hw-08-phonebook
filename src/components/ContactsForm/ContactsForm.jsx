import { nanoid } from 'nanoid';
import './ContactsForm.module.css';
import InputLabel from '../InputLabel/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import React, { useState } from 'react';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactExists = contacts.some(contact => contact.name === name);
    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form onSubmit={handleSubmit} onClick={() => dispatch(setFilter(''))}>
      <InputLabel
        id={nameId}
        name="name"
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
      />
      <InputLabel
        id={numberId}
        name="number"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
