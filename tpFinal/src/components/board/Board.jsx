import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from "../icon/Icon";
import Template from '../template/Template';
import icons from '../../utils/IconsUtils'
import './Board.css';

const Board = ({size, setSize})=>{

  const [selectIcon , setSelectIcon] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [count, setCount] = useState(0);
  const [randomIcons, setRandomIcons] = useState([]);
  const [finished ,setFinished] = useState(false);
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(!!size){
      const totalCells = parseInt(size.split('x')[0]) * parseInt(size.split('x')[1]);
      const boardIcons = icons.slice(0, totalCells / 2)
                              .flatMap((icon) => [icon,icon])
                              .sort(() => Math.random() - 0.5)
                              .map((icon, i ) => ({id: i, icon}));
      setRandomIcons(boardIcons);

    }
  },[size])

  useEffect(() => {
    if(selectIcon.length == 2){
      if(selectIcon[0].icon == selectIcon[1].icon){
        setGuessed((guessed) => guessed.concat(selectIcon))
        setCount(count+1);
      }
      setTimeout(() => 
        setSelectIcon([])
      , 1000)
    }
  }, [selectIcon])

  useEffect(() => {
    if(guessed.length > 0 && guessed.length == randomIcons.length){
      setFinished(true);
    }
  },[guessed])
  
  const handleRestart =() => {
    setCount(0);
    navigate('/');
    setSize("");
    setGuessed([]);
  }

    return(
      <Template>
        <div className='contador'>
          <p>Score: {count}</p>
        </div>
        <div className='content'>
          {randomIcons.map((icon) => (
            selectIcon.includes(icon) || guessed.includes(icon) ? (
              <div key={icon.id} className='icon-container'>
              <Icon icon={icon}/>
            </div>
            ):(
            <div key={icon.id} className='default-content' onClick={() => selectIcon.length < 2 && setSelectIcon((selectIcon) => selectIcon.concat(icon))}> 
              <img src= 'https://icongr.am/clarity/fish.svg?size=128&color=currentColor'/>
            </div>
            )            
          ))}
        </div>
          <button onClick={handleRestart}>Restart</button>
        {finished && 
          <ModalWin restart={handleRestart} score={count}/>
        }
      </Template> 
      
    )
}

export default Board;