import React from 'react'
import { useState } from 'react';
import "./Mcq.css";


function Mcq({q,countHandler,index}) {
    const [count, setcount] = useState(0);
    const [disable, setdisable] = useState(false)
    const [current, setCurrent] = useState(0)
    var output=0;
    const [name1, setname1] = useState("");
    const [name2, setname2] = useState("");
    const [name3, setname3] = useState("");
    const [name4, setname4] = useState("");

    function func(id,ans,opt){
        setdisable(true);
        if(ans===opt)
        {
        setcount(count+1);
        output=output+1;
        console.log(output)
        }
        setCurrent(current+1)
        console.log(count);
        countHandler(output);
        if(id==='1')
        setname1("click");
        else if(id==='2')
        setname2("click");
        else if(id==='3')
        setname3("click");
        else 
        setname4('click');
      }
  return (
    <>
    <h1>Q{index+1} {q.statement}</h1>
    <button id={name1} value={q.option1} onClick={()=>func("1",q.answer,q.option1)} disabled={disable}>{q.option1}</button>
    <button id={name2} value={q.option2} onClick={()=>func("2",q.answer,q.option2)} disabled={disable}>{q.option2}</button>
    <button id={name3} value={q.option3} onClick={()=>func("3",q.answer,q.option3)} disabled={disable}>{q.option3}</button>
    <button id={name4} value={q.option4} onClick={()=>func("4",q.answer,q.option4)} disabled={disable}>{q.option4}</button>
    </>
  )
}

export default Mcq