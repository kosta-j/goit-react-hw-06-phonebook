import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import s from './Wrapper.module.css';

function Wrapper({ contacts }) {
  // useEffect(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(localContacts);
  //   parsedContacts && setContacts(parsedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={s.wrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length < 1 ? (
          <Notification text="Contact list is empty" />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // filter: state.contacts.filter,
    contacts: state.contacts.items,
  };
};

// const mapDispatchToProps = dispatch => {
//   return { changeFilter: e => dispatch(actions.changeFilter(e)) };
// };

export default connect(mapStateToProps)(Wrapper);
