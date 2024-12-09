import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from "./Icon"
import Template from './Template';

const Board = ({size, setSize})=>{
  const icons = ['https://icongr.am/devicon/ruby-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/google-original.svg?size=128&color=currentColor',
                 'https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor',
                 'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
                 'https://icongr.am/devicon/twitter-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/redis-original-wordmark.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/github-original.svg?size=128&color=currentColor', 
                 'https://icongr.am/devicon/firefox-original.svg?size=128&color=currentColor'];
                 console.log(icons.length)

  const [selectIcon , setSelectIcon] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [count, setCount] = useState(0);
  const [randomIcons, setRandomIcons] = useState([]);
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
    if(guessed.length == randomIcons.length){
      console.log("ganaste") //cambiar por toast u otra cosa.

    }
  },[guessed])
  
  const handleRestart =() => {
    setCount(0);
    navigate('/');
    setSize("");
  }

    return(
      <Template>
        <div className='contador'>
          <p>Score: {count}</p>
        </div>
        <div className='content'>
          {console.log(randomIcons)}
          {randomIcons.map((icon) => (
            selectIcon.includes(icon) || guessed.includes(icon) ? (
              <div key={icon.id} className='icon-container'>
              <Icon icon={icon}/>
            </div>
            ):(
            <div key={icon.id} className='default-content' onClick={() => selectIcon.length < 2 && setSelectIcon((selectIcon) => selectIcon.concat(icon))}> 
              <img alt='icon'src='https://icongr.am/clarity/fish.svg?size=128&color=currentColor'/>
            </div>
            )            
          ))}
        </div>
        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </Template>
    )
}

export default Board;