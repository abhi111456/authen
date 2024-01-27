import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginAndLogout from './components/LoginAndLogout';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
     <Routes>
            <Route path='/' element={<LoginAndLogout/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
   </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
