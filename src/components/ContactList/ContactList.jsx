import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import * as actions from '../../Redux/actions';
import s from './ContactList.module.css';

function ContactList({ filter, contacts, onDeleteBtnClick }) {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
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
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteBtnClick: contact => dispatch(actions.deleteContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
