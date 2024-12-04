import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from './components/Icon';

function App() {
  const icons = ["A", "B", "C", "D"].flatMap((icon) => [icon,icon]).sort(() => Math.random() - 0.5); 
  const randomIcons = icons.map((icon, i ) => ({id: i, icon})); 
  //extraccion en componente para hacer router en app, componente unico para renderizara cada icono
  return (
    <div className='content'>
      {randomIcons.map((icon) => 
        <div key={icon.id} className='icon-container'>
          <Icon icon={icon}/>
        </div>
      )}
    </div>
  )
}

export default App
