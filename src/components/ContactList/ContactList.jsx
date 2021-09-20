import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteBtnClick }) {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteBtnClick={onDeleteBtnClick}
        >
          <button type={s.button} onClick={() => onDeleteBtnClick(contact.id)}>
            Delete
          </button>
        </ContactItem>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteBtnClick: PropTypes.func,
};

export default ContactList;
