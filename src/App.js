import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStatevalue } from './StateProvider';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe('pk_test_51KEa3USBWNUvUd9SqLO2lntH2CwOpRXmmvHKUNl4FjU9NbwSQ61hwVhNHjjPFEKyGzTp4LBbsAWTaPNPqW1JpOUr00EnZyyWH3');

function App() {

  const [{ }, disbatch] = useStatevalue();

  useEffect(() => {
    // will onlt run when app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was login
        disbatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user was logged out
        disbatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className='app'>
      <Header />
      <Routes basename='/index.html' >
        <Route path="/Login" element={<Login />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/checkout" element={<Checkout />}>
        </Route>
        {/* <Elements stripe={promise}> */}
          <Route path="/payment" element={<Payment />}>
          </Route>
        {/* </Elements> */}
      </Routes>
    </div>
  );
}

export default App;
