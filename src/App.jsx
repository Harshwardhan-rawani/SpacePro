import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import Carosel from './components/Carosel';

import Cards from './components/Cards';
import Photo from './components/Photo';
import Footer from './components/Footer';
function App() {


  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<><Carosel/><Cards/><Photo/><Footer/></>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
