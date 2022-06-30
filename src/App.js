import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Wrapper from "components/Wrapper";
import AppBar from 'components/AppBar';
import BarLoader from "react-spinners/BarLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  let [color, setColor] = useState("#6495ed");
  
  return (
    <>
      <AppBar />
      
      <Routes>
        <Route
          index
          element={
            <Wrapper>
              <Suspense fallback={<BarLoader color={color} />}>
                <HomePage />
              </Suspense>
            </Wrapper>
          }
        />
        
        <Route
          path="/register"
          element={
            <Wrapper>
              <Suspense fallback={<BarLoader color={color} />}>
                <RegisterPage />
              </Suspense>
            </Wrapper>
          }
        />
        
        <Route
          path="/login"
          element={
            <Wrapper>
              <Suspense fallback={<BarLoader color={color} />}>
                <LoginPage />
              </Suspense>
            </Wrapper> 
          }
        />

        <Route
          path="/contacts"
          element={
            <Wrapper>
              <Suspense fallback={<BarLoader color={color} />}>
                <ContactsPage />
              </Suspense>
            </Wrapper>
          }
        />

        <Route path='*'element={<HomePage/>}/>
      </Routes>

      <ToastContainer autoClose={3000} theme="colored" />
    </>
  )
}

export default App;