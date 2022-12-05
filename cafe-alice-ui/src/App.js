import React, { useEffect } from 'react';
import Router from './Router';
import Navbar from './components/layout/Navbar';
import './App.css'
import { setAuthHeader } from './Utils/authHeader'
import store from './store';
import { login, userLoad } from './Actions/auth';

function App() {
  useEffect(() => {
    if (localStorage?.token) {
      setAuthHeader(localStorage.token)
    }
    store.dispatch(login)
  }, [localStorage?.token]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
