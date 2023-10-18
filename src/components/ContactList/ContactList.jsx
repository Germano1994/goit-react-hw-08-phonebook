import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import ContactListItem from '../ContactListItem';
import { List, ListWrapper } from './ContactList.styled';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <ListWrapper>
      <List>
        {contacts &&
          contacts
            .map(({ id, name, number }) => (
              <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
      </List>
    </ListWrapper>
  );
};

export default ContactList;