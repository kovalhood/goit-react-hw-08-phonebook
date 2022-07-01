import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import Wrapper from "components/Wrapper";
import AppBar from 'components/AppBar';
import BarLoader from "react-spinners/BarLoader";
import PrivateRoute from 'components/PrivateRoutes/PrivateRoutes';
import PublicRoute from 'components/PublicRoutes/PublicRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  // Setting color for loader
  let [color, setColor] = useState("#6495ed");
  
  // isFetchingCurrentUser added for flawless loading of the page without element-by-element loading
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();
  
  // Loading current user if not logged out from last session
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Routes>
            <Route path="/"
              element={
                <PublicRoute>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color={color} />}>
                      <HomePage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />
            
            <Route path="/register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color={color} />}>
                      <RegisterPage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />
            
            <Route path="/login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color={color} />}>
                      <LoginPage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />

            <Route path="/contacts"
              element={
                <PrivateRoute>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color={color} />}>
                      <ContactsPage />
                    </Suspense>
                  </Wrapper>
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ToastContainer autoClose={3000} theme="colored" />
        </>
      )}
    </>
  )
};

export default App;