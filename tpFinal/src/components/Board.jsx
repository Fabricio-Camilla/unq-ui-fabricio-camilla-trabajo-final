import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from "./Icon";
import Template from './Template';
import './Board.css';
import ruby from '../assets/ruby-original.svg';
import mongo from '../assets/mongodb-original.svg';
import java from '../assets/java-original.svg';
import google from '../assets/google-original.svg';
import postgresql from '../assets/postgresql-original.svg';
import python from '../assets/python-original.svg';
import twitter from '../assets/twitter-original.svg';
import redis from '../assets/redis-original.svg';
import react from '../assets/react-original.svg';
import linkedin from '../assets/linkedin-original.svg';
import explorer from '../assets/ie10-original.svg';
import git from '../assets/github-original.svg';
import firefox from '../assets/firefox-original.svg';
import android from '../assets/android-original.svg';
import angular from '../assets/angularjs-original.svg';
import apple from '../assets/apple-original.svg';
import c from '../assets/c-original.svg';
import cplus from '../assets/cplusplus-original.svg';
import docker from '../assets/docker-original.svg';
import gitlab from '../assets/gitlab-original.svg';
import heroku from '../assets/heroku-original.svg';
import intellij from '../assets/intellij-original.svg';
import kraken from '../assets/krakenjs-original.svg';
import linux from '../assets/linux-original.svg';
import sql from '../assets/mysql-original.svg';
import photoshop from '../assets/photoshop-line.svg';
import php from '../assets/phpstorm-original.svg';
import pycharm from '../assets/pycharm-original.svg';
import safari from '../assets/safari-original.svg';
import slack from '../assets/slack-original.svg';
import tomcat from '../assets/tomcat-original.svg';
import windows from '../assets/windows8-original.svg';




const Board = ({size, setSize})=>{
  const icons = [ruby, mongo, java, google, postgresql, python, twitter, redis, react, 
                 linkedin, explorer, git, firefox, android,angular,apple, c, cplus, docker, gitlab,
                 heroku, intellij, kraken, linux, sql, photoshop, php, pycharm, safari, slack, tomcat, windows
                 ];
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
    if(randomIcons > 0 && guessed.length == randomIcons.length){
      console.log("ganaste") //cambiar por toast u otra cosa.

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
          {console.log(randomIcons)}
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
        <div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </Template>
    )
}

export default Board;