import Quizbox from "./Quizbox";
import { useState, useEffect } from "react";

export default function Questionbox() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/data");
      const resjson = await res.json();

      if (res.ok) {
        setData(resjson);
      }
      // console.log(data);
    };
    fetchData();
  }, []);

  function func(val) {
    return (
      <div className="col-md-4">
        {/* {console.log(val.img)} */}
        <Quizbox name={val.name} des={val.des} img={val.url}></Quizbox>
      </div>
    );
  }
  return (
    <>
      <div className="container my-3">
        <h1>Select Quiz</h1>
        {/* errror */}
        <div className="row">{data && data.map(func)}</div>
      </div>
    </>
  );
}
