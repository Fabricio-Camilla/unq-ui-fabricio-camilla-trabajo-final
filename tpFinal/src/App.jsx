import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Board from './components/Board';
import Home from './components/Home';

function App() {
  //extraccion en componente para hacer router en app, componente unico para renderizara cada icono
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/memotest" element={<Board/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
