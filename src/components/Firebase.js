import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginAndLogout from './LoginAndLogout'
import Home from './Home'

export default function Firebase() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/' element={<LoginAndLogout/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
