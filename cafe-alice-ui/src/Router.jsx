import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Login from './components/Auth/Login';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux';
import AddCatagory from './components/products/AddCatagory';
import Dashboard from './components/Auth/Dashboard';
import EditProfile from './components/Auth/EditProfile';
import Payments from './components/orders/Payments';
import ProductCatagory from './components/products/ProductCatagory';
import Feedback from './components/users/Feedback';
import Orders from './components/orders/Orders';
import PrivateRoutes from './PrivateRoutes';
import PasswordRecovery from './components/Account/PasswordRecovery';
import Rider from './components/Rider/Rider';
import Users from './components/users/Users';
import BlockUser from './components/users/BlockUser';
import BlockRider from './components/Rider/BlockRider';
import EnterEmail from './components/Account/EnterEmail';
import CodeVerification from './components/Account/CodeVerification';

export default function Router(){
  return (
    <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/enter-email' element={<EnterEmail/>}/>
          <Route path='/code-verification' element={<CodeVerification/>}/>

          <Route path='/password-recovery/:code' element={<PasswordRecovery/>}/>
          <Route path='/dashboard' element={<PrivateRoutes><Dashboard />  </PrivateRoutes>}/>
          
          <Route path='/profile' element={<PrivateRoutes><EditProfile /></PrivateRoutes>} />


          <Route path='/orders' element={<PrivateRoutes> <Orders /> </PrivateRoutes>}/>

        <Route path='/users' element={<PrivateRoutes><Users/></PrivateRoutes>}/>
        <Route path='/rider' element ={<PrivateRoutes><Rider/></PrivateRoutes>}/>
        <Route path='/block-user' element ={<PrivateRoutes><BlockUser/></PrivateRoutes>}/>
        <Route path='/blocked-rider' element={<PrivateRoutes><BlockRider/></PrivateRoutes>}/>
        <Route path='/feedback' element={  <PrivateRoutes><Feedback/></PrivateRoutes>} />              
        
        </Routes>
    </>
  )

}