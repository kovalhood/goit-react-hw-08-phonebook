// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
// import { NavLink, Navigate } from 'react-router-dom';
import Section from 'components/Section';
import Container from 'components/Container';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <Section>
      <Container>
        <h1>Home Page</h1>
      </Container>
    </Section>
  );
};