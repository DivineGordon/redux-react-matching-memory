import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {selectVisibleIDs,flipCard,selectMatchedIDs} from '../../boardSlice.js'
const logos=['react.svg','girl_and_motar.jpg'];
const cardLogo=()=>{
  return "images/"+logos[Math.floor(Math.random()*2)]
};
//let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {

   const dispatch=useDispatch();
  const visibleIDs=useSelector(selectVisibleIDs);
  const matchedIDs=useSelector(selectMatchedIDs);
  
  
  // flip card action
  const flipHandler = (id) => {
   
   dispatch(flipCard(id))
  };

  let cardStyle = 'resting'
  let click = () =>{ 

    flipHandler(id)
   
  };
  
  let cardText = (
    <img src={cardLogo()} className="logo-placeholder"  
    alt="Card option" />
  );

  
  if (visibleIDs.some(cid=>id===cid)) {
    cardText = contents;
    click = () => {};

  }

  
  if (matchedIDs.some(cid=>id===cid) && visibleIDs.some(cid=>id===cid)) {
   if( matchedIDs.every(m=>visibleIDs.some(v=>m===v))){
    cardStyle = 'matched';
   }
  }

  
  else if (visibleIDs.length===2) {
    click = () => {};
    if(visibleIDs.some(cid=>id===cid)){
   cardStyle= 'no-match';
  }
  
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
