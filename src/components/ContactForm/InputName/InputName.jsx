import PropTypes from 'prop-types';
import s from './InputName.module.css';

const InputName = ({ name, onNameChange}) => {
  return <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    placeholder='Enter name'
    value={name}
    onChange={onNameChange}
    className={s.input}
  />
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
}

export default InputName;