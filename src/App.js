import React from 'react'
import {Route,Routes } from 'react-router-dom';
import LoginAndLogout from './components/LoginAndLogout';
import Login from './components/Login';
export default function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<LoginAndLogout/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}
