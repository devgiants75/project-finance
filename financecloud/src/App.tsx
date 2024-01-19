import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/a_home';
import Login from './pages/b_login';
import SignUp from './pages/b_signUp';

import Customer from './pages/c_customer';
import Seller from './pages/g_seller';

import FundingMain from './pages/d_fundingMain';
import FundingView from './pages/e_fundingView';
import FundingDetails from './pages/f_fundingDetails';

import Participation from './pages/f_participation';
import Purchase from './pages/f_purchase';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signUp'>SignUp</Link></li>

          <li><Link to='/customer'>Customer</Link></li>
          <li><Link to='/seller'>Seller</Link></li>

          <li><Link to='/fundingMain'>FundingMain</Link></li>
          <li><Link to='/fundingView'>FundingView</Link></li>
          <li><Link to='/fundingDetails'>FundingDetails</Link></li>

          <li><Link to='/participation'>Participation</Link></li>
          <li><Link to='/purchase'>Purchase</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route path="/customer" element={<Customer />} />
        <Route path="/seller" element={<Seller />} />

        <Route path="/fundingMain" element={<FundingMain />} />
        <Route path="/fundingView" element={<FundingView />} />
        <Route path="/fundingDetails" element={<FundingDetails />} />

        <Route path="/participation" element={<Participation />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </>
  );
}

export default App;
