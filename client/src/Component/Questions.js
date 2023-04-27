import { func } from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Questions(props) {
  const [ques, setQues] = useState(null);
  const [count, setcount] = useState(0);
  const [answer, setAnswer] = useState();
  const [temp, setTemp] = useState("temps");
  const { type } = useParams();
  var ans = "";
  ques &&
    ques.map((q) => {
      ans = q.answer;
    });
  function myFunction() {
    var a = document.getElementById("myBtn").value;
    if (a === ans) {
      setTemp(`correctAnswer = ${ans}`);
      setcount(count + 1);
    } else {
      setTemp(`wrong answer = ${a}`);
    }
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
  }, [answer]);

  return (
    <>
      <h1>Count={count}</h1>
      {ques &&
        ques.map((q) => {
          return (
            <>
              <h1>{q.statement}</h1>
              <button >
                {q.option1}
              </button>
              <button id="myBtn2" value={q.option1} onClick={myFunction}>
                {q.option2}
              </button>
              <button>{q.option3}</button>
              <button>{q.option4}</button> <p>{temp}</p>
              <button onClick={myFunction}>Submit</button>
            </>
          );
        })}
    </>
  );
}
