//import './App.css';
import React,{useState} from 'react';

import { Score } from '../features/score/Score.js';
import { Board } from '../features/board/Board.js';

import {useDispatch} from 'react-redux';
import {setBoard , resetCards} from  '../features/board/boardSlice.js'

const App = () => {
  const [tries,setTries]=useState(3);
  const [gameOver,setGameOver]=useState(false);
  const dispatch=useDispatch()

  const startGameHandler = () => {
    
    dispatch(setBoard())
    if(tries!==3){
    setTries(3)
  }
  if(gameOver){
    setGameOver(false)
  }
  };

  const tryAgainHandler = () => {
    if(tries===-1 && !gameOver){
    return  setGameOver(true)
     };
     if(tries===-1)return;
   dispatch(resetCards())
   setTries(state=>state-1)
   
  };

  return (
    <div className="App">
      <Score />
      <Board tries={tries} gameOver={gameOver}/>
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
