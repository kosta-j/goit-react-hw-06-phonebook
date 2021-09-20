import { connect } from 'react-redux';
import * as actions from '../../Redux/actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      <p className={s.inputTitle}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return { onChange: e => dispatch(actions.changeFilter(e)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
