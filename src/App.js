import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/AppBar';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
    return (
        <>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route
                path="/"
                element={
                    <HomePage />
                }
              />
              <Route
                path="/register"
                element={
                    <RegisterPage />
                }
              />
              <Route
                path="/login"
                element={
                    <LoginPage />
                }
              />
              <Route
                path="/contacts"
                element={
                    <ContactsPage />
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
    )
}

export default App;