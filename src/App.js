import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import 'materialize-css/dist/css/materialize.min.css';
import seat from './seat.jpg'

import './App.css';


class App extends Component {
  render() {
    return (<>
      <div>
        <h1 className="Heading">
          Welcome to Online Seat Booking System
        </h1>
      </div>
      <div className='c'>
        <img src={seat} alt="seats" height='300' />
      </div>

      <div className='login'>
        <Link to='/AdminLogin'>Login </Link>
      </div>
      <Routes>
        <Route path="/Adminlogin" element={<AdminLogin />} />


      </Routes>




    </>
    );
  }
}
export default App;