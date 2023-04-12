import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import { Footer } from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import MyTasks from './pages/myTasks';
import './global-styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "mytasks"  element = {<MyTasks/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
)
