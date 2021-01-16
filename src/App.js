
import './App.css';
import React from "react";
import gridrow from "./gridrow";
import griditem from './griditem';

export default class App extends React.Component
{
render(){
  return (<div className="container">
    <div className="header">Tic-Tac-Toe</div>
    <div id="board">
        <griditem />
        <griditem />
        <griditem />
    </div>
  </div>);
}
}


