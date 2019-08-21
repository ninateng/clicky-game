
import React from "react";
import './style.css';

function Navbar (props) {
  return (
    <div className="infoBar">
      

<div id="container">
    <div id="left">Clicky Game</div>
    <div id="middle">  </div>
    <div id="right">Score: {props.score} Highest Score: {props.highScore}  </div>
</div>

    </div>
  );
}




export default Navbar;