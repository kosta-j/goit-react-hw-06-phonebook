import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import * as actions from '../../Redux/actions';
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
          <button type={s.button} onClick={() => onDeleteBtnClick(contact)}>
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

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: filteredContacts,
    // filter: filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteBtnClick: contact => dispatch(actions.deleteContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
