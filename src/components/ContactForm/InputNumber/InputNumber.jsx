import PropTypes from 'prop-types';
import PhoneField from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import s from './InputNumber.module.css';

const InputNumber = ({ phone, onNumberChange}) => {
  return <PhoneField
    type="tel"
    name="phone"
    country={'ua'}
    placeholder={'+380 (50) 000 00 00'}
    autoFocus={false}
    value={phone}
    onChange={onNumberChange}
    required={'required'}
    containerStyle={{
      marginTop:"5px",
      borderRadius: "5px",
    }}
    inputStyle={{
      width: "100%",
      height: "40px",
      fontSize: "14px",
      padding: "10px 10px 10px 48px",
      borderRadius: "5px",
      border:"none",
    }}
    buttonStyle={{
      border:"none",
    }}
    dropdownStyle={{
      width: "260px",
      borderRadius: "5px",
    }}
  />
}

InputNumber.propTypes = {
  phone: PropTypes.string.isRequired
}

export default InputNumber;