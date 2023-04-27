// import React from "react";
// import { useState, useEffect } from "react";

// export default function ShowQuestion() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://localhost:8080/data/ques");
//       const resjson = await res.json();

//       if (res.ok) {
//         setData(resjson);
//       }
//       // console.log(data);
//     };
//     fetchData();
//   }, []);
//   return (
//     <>
//       {data &&
//         data.map((ques) => {
//           <h1>{ques.statement}</h1>;
//         })}
//     </>
//   );
// }
