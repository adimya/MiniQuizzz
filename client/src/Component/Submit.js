import React from 'react';
import { Link } from "react-router-dom";
import "./Submit.css"
import { useState } from 'react';
import tryagain from './Quiz/tryagain.gif';
import awesome from './Quiz/awesome-yay.gif';

function Submit({count,total}) {
  
  return (<div id="container">
    <h1>Result Page</h1>
    <div id='score'>
    {count>=total/2 && <img src={awesome}  style={{ width:"400px"}}alt="loading..." />}
    {count<total/2 && <img src={tryagain}  style={{ width:"400px"}}  alt="loading..." />}
    <div  >Score={count} of {total}</div>
    <Link style={{textDecoration: 'none'}} to={{
        pathname:'/',
    }}><button style={{padding:"20px 130px", marginTop:"40px"}}>Another Quiz?</button></Link>
    </div>
    </div>
  )
}

export default Submit