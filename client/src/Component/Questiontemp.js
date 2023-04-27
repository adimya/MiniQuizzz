import { func } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mcq from "./Mcq";
import Submit from "./Submit";


export default function Questiontemp(props) {
  const [ques, setQues] = useState(null);
  const [countmcq, setcountmcq] = useState(0)
  const { type } = useParams();
  const [submited, setsubmited] = useState(false);
  var count=1;
  
  function countHandler(output){
    if(output){
    setcountmcq(countmcq+1);
    }
    count=count+output;
    console.log(count);
    console.log(countmcq);
  }
  function onSubmitHandler(){

    setsubmited(true);
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8080/data/ques/${type}`);
      const resjson = await res.json();
      if (res.ok) {
        setQues(resjson);
        console.log(ques);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div id='container'>
        <div id="mcq">
    <h1>{submited && <Submit count={countmcq} total={ques.length}/>}</h1>
    {!submited && <h1>Questions on {type}<br></br><br></br></h1>}
      {!submited && ques &&
        
        ques.map((q,index) => {
          return (<>
            <Mcq q={q} index={index} countHandler={countHandler}/></>
          );
        })}
      {!submited && <button onClick={onSubmitHandler} style={{marginTop:"30px",backgroundColor:"skyblue"}} >Submit</button>}
      </div>
  </div>
    </>
  );
}
