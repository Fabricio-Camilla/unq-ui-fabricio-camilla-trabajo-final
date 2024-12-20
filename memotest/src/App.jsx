import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Board from './components/board/Board';
import Home from './components/home/Home';

function App() {
  //extraccion en componente para hacer router en app, componente unico para renderizara cada icono
  const [size, setSize] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setSize={setSize} size={size}/>}/>
        <Route path="/memotest" element={<Board size={size} setSize={setSize}/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
