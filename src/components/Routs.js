import React from 'react';
import {Routes,Route} from 'react-router-dom';
import LoginAndLogout from './LoginAndLogout';
import Login from './Login';


export default function Routs() {
  return (
    <>
        <Routes>
            <Route path='/' element={<LoginAndLogout/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}
