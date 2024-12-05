import React from 'react'
import Icon from "./Icon"
import './Icon.css'

const Board = ()=>{
    
  const icons = ["A", "B", "C", "D"].flatMap((icon) => [icon,icon]).sort(() => Math.random() - 0.5); 
  const randomIcons = icons.map((icon, i ) => ({id: i, icon})); 
    return(
        <div className='content'>
      {randomIcons.map((icon) => 
        <div key={icon.id} className='icon-container'>
          <Icon icon={icon}/>
        </div>
      )}
    </div>
    )
}

export default Board;