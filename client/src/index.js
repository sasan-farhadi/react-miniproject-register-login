import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Doshboard from './components/doshboard/Doshboard'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Article from './components/article/Article'
import User from './components/list/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Doshboard />} />
        <Route path='/article' element={<Article />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter >
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
