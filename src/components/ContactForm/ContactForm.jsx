import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts/contactsApi';
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', number: '' });

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isSuccess, isLoading }] = useAddContactMutation();
  
  // Creating handlers for our name and number fields
  const handleNameChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }

  const handlePhoneChange = phoneValue => {
    setForm(prevForm => ({ ...prevForm, number: phoneValue }));
  }

  // Creating submit handler
  const handleSubmit = event => {
    event.preventDefault();

    // Rules for fields
    if (form.name === '' && form.number === '') {
      return toast.warn("Enter data of contact");
    }
    if (form.name === '') {
      return toast.warn("Enter the name of contact");
    }

    if (form.number === '') {
      return toast.warn("Enter the phone number of contact");
    }

    if (contacts.find(contact => contact.name.toLowerCase() === form.name.toLowerCase())) {
      resetForm();
      return toast.info(`${form.name} is already in contacts`);
    }

    // After success happens this
    addContact(form);
    toast.success(`${form.name} is added to your contacts`);
    resetForm();
  };

  const resetForm = () => {
      setForm({ name: '', number: '' });
  };

  return <form onSubmit={handleSubmit} className={s.form}>
    <Label labelTitle={'Name'}>
      <InputName name={form.name} onNameChange={handleNameChange}/>
    </Label>
    
    <Label labelTitle={'Number'}>
      <InputNumber phone={form.number} onNumberChange={handlePhoneChange} />
    </Label>
    
    <Button type={'submit'} title={'Add contact'} />
  </form>
};

export default ContactForm;