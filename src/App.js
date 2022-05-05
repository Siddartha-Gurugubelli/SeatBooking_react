import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import 'materialize-css/dist/css/materialize.min.css';
import { Home } from './components/Home';

import UserLogin from './components/UserLogin';

import './App.css';


export function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/UserLogin" element={<UserLogin />}></Route>

      </Routes>
    </>
  );
}
export default App;