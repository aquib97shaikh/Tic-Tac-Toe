import React from "react";
import griditem from "./griditem";
import  "./gridrow.css";

export default class gridrow extends React.Component
{
    
    render(){
        const gi=[<griditem />,<griditem />,<griditem />];
        return <div className="gridrow">{gi}</div>;
    }
}