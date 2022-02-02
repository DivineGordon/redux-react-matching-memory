import React from 'react';
var message="Game Over!";
export function Alert({tries,gameOver}){

 return (<p style={{color:gameOver?"#f00":'inherit'}}>
     { (tries>=0)?""+tries+" tries left":(gameOver?message:"")}</p>)
}