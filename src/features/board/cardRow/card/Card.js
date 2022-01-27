import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {selectVisibleIDs,flipCard,selectMatchedIDs} from '../../boardSlice.js'

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {

   const dispatch=useDispatch();
  const visibleIDs=useSelector(selectVisibleIDs);
  const matchedIDs=useSelector(selectMatchedIDs);
  let noMatch="";
  
  // flip card action
  const flipHandler = (id) => {
   
   dispatch(flipCard(id))
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  
  if (visibleIDs.some(cid=>id===cid)) {
    cardText = contents;
    click = () => {};

  }

  
  if (matchedIDs.some(cid=>id===cid)||visibleIDs.some(cid=>id===cid)) {
    cardStyle = 'matched';
  }

  
  if (visibleIDs.length===2) {
    click = () => {};
   noMatch= matchedIDs.length!==2?'no-match':"";
  }

  return (
    <button onClick={click} className={`card ${cardStyle} ${noMatch}`}>
      {cardText}
    </button>
  );
};
