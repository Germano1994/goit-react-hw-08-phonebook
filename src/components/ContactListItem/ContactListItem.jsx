import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import EditContactModal from 'components/EditContactModal/EditContactModal';
import {
  Item,
  ContactWrap,
  Avatar,
  Name,
  Number,
  ButtonWrap,
  Button,
  DeleteIcon,
  EditIcon,
} from './ContactListItem.styled';


const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <>
      <Item>
        <ContactWrap>
          <Avatar />
          <Name>{name}: </Name>
          <Number>{number}</Number>
        </ContactWrap>
        <ButtonWrap>
          <Button
            type="button"
            aria-label="edit"
            onClick={() => setModalOpen(true)}
          >
            <EditIcon />
          </Button>
          <Button
            type="button"
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </Button>
        </ButtonWrap>
      </Item>
      {isModalOpen && (
        <EditContactModal
          id={id}
          name={name}
          number={number}
          onClose={() => setModalOpen(false)}
          open={isModalOpen}
        />
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;