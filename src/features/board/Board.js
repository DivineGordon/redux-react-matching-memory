import React from 'react';
import ReactDOM from 'react-dom';
import { CardRow } from './cardRow/CardRow.js';
import { Alert } from '../alert/Alert.js';
import {useSelector} from 'react-redux';
import {selectBoard} from './boardSlice.js'
const container=document.getElementById("message");
export const Board = ({tries,gameOver}) => {
  
  const currentBoard=useSelector(selectBoard);

  const numberOfCards = currentBoard.length;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  const getRowCards = (row) => {
    const rowCards = [];
    for (let j = 0; j < columns; j++) {
      const cardIndex = row * columns + j;
      // Implement selected data below
      rowCards.push(currentBoard[cardIndex]);
    }
    return rowCards;
  };

  let content = [];
  for (let row = 0; row < rows; row++) {
    const rowCards = getRowCards(row);
    content.push(
      <CardRow 
        key={row} 
        cards={rowCards}
      
      />
    );
  }
  const alert=ReactDOM.createPortal(
  <Alert gameOver={gameOver} key={2} tries={tries} />,container);
  return [<div key={1} style={{textAlign:"center"}}><div  className="cards-container">{content}</div></div>,
alert];
};
