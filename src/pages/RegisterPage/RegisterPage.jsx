import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
import Section from 'components/Section';
import Container from 'components/Container';
import Card from 'components/Card';
import Label from 'components/ContactForm/Label';
import Button from 'components/Button';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   dispatch(authOperations.register({ ...form }));
  //   setForm({ name: '', email: '', password: '' });
  // };

  const { name, email, password } = form;
  return (
    <Section>
      <Container>
        <Card title={'Registration'}>
          {/* <form onSubmit={handleSubmit}> */}
          <form className={s.form}>
            <Label labelTitle={'Name'}>
              <input
                className={s.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder='Enter name'
                required
                value={name}
                onChange={handleChange}
              />
            </Label>
            <Label labelTitle={'Email'}>
              <input
                className={s.input}
                type="email"
                name="email"
                pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                placeholder='Enter email'
                required
                value={email}
                onChange={handleChange}
              />
            </Label>
            <Label labelTitle={'Password'}>
              <input
                className={s.input}
                type="password"
                name="password"
                placeholder='Enter password'
                required
                value={password}
                onChange={handleChange}
              />
            </Label>

            <Button type={'submit'} title={'Registration'} />
          </form>
        </Card>
      </Container>
    </Section>
  );
}