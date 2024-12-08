import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from "./Icon"
import Template from './Template';

const Board = ({size, setSize})=>{
  const icons = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J" , "K", "L", "M"];
  const [selectIcon , setSelectIcon] = useState([]);
  const [count, setCount] = useState(0);
  const [randomIcons, setRandomIcons] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!!size){
      const totalCells = parseInt(size.split('x')[0]) * parseInt(size.split('x')[1]);
      const iconsSize = icons.slice(0, totalCells / 2);
      const boardIcons = iconsSize.flatMap((icon) => [icon,icon])
                              .sort(() => Math.random() - 0.5)
                              .map((icon, i ) => ({id: i, icon})); 
      setRandomIcons(boardIcons);
    }
  },[size])
  
  const handleSelect = (icon) => {
    console.log(selectIcon.length)
    console.log(selectIcon)
    if(selectIcon.length < 2){
      const selects = [...selectIcon, icon.icon]
      setSelectIcon(selects)
      console.log(selectIcon)
    }
  }
  const handleRestart =() => {
    setCount(0);
    navigate('/');
    setSize(0);
  }

    return(
      <Template>
        <div>
          <p>Score: {count}</p>
        </div>
        <div className='content'>
          {randomIcons.map((icon) => 
            <div key={icon.id} className='icon-container' onClick={() => handleSelect(icon)}>
              <Icon icon={icon}/>
            </div>
          )}
        </div>
        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </Template>
    )
}

export default Board;