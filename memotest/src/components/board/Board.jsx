import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from "../icon/Icon";
import Template from '../template/Template';
import icons from '../../utils/IconsUtils';
import defaultIcon from '../../assets/fish.svg';
import ModalWin from '../modal/Modal';
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
      const boardIcons = icons.slice(0, size)
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

  const handlePlayAgain = ()=>{
    setCount(0);
    setGuessed([]);
    setSelectIcon([]);
    setFinished(false);
    const boardIcons = icons.slice(0, size)
                              .flatMap((icon) => [icon,icon])
                              .sort(() => Math.random() - 0.5)
                              .map((icon, i ) => ({id: i, icon}));
      setRandomIcons(boardIcons);
  }

    return(
      <Template>
        <div className='contador'>
          <p>Score: {count}</p>
        </div>
        <div className={ size == 8 ? 'content-4x4' : size == 18 ? 'content-6x6' : 'content-8x8' }>
          {randomIcons.map((icon) => (
            selectIcon.includes(icon) || guessed.includes(icon) ? (
              <Icon icon={icon}/>
            ):(
            <div key={icon.id} className='default-content' onClick={() => selectIcon.length < 2 && setSelectIcon((selectIcon) => selectIcon.concat(icon))}> 
              <div className='icon'>
                <img src= {defaultIcon}/>
              </div>
            </div>
            )            
          ))}
        </div>
          <button onClick={handleRestart}>Restart</button>

        {finished && 
          <ModalWin restart={handleRestart} score={count} playAgain={handlePlayAgain}/>
        }
      </Template> 
      
    )
}

export default Board;