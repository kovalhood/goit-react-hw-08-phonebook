// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
import { NavLink, Navigate } from 'react-router-dom';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <Section>
      <Container>
        <div className={s.home}>
          <h1 className={s.title}>Welcome to the Phonebook!</h1>
          <p className={s.text}>Please register or login</p>

          <div className={s.navigation_buttons}>
        <NavLink to="/register" className={s.link}>
          <Button type={'button'} title={'Register'} />
        </NavLink>
        <NavLink to="/login" className={s.link}>
          <Button type={'button'} title={'Login'} />
            </NavLink>
            </div>
          </div>
      </Container>
    </Section>
  );
};