import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';

export default function UserQues({ dataName }) {
  const [isSubmit, setisSubmit] = useState(false);
  const [statement, setStatement] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const [excelFile, setexcelFile] = useState(null);
  const [excelData, setexcelData] = useState(null);

  console.log(excelFile);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const question = {
      statement: statement,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      dataTitle: dataName,
    };
    console.log(question);

    const response = await fetch("http://localhost:8080/data/newQues", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      Swal.fire("Good job!", "You clicked the button!", "success");
    }
    setisSubmit(true);
    const json = await response.json();
    setStatement("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");
  };

  const handleFile = (e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      let reader=new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload=(e)=>{
        setexcelFile(e.target.result);
      }
    }
    else{
      console.log("please select your file")
    }
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();

    if(excelFile!==null)
    {
      const workbook= XLSX.read(excelFile,{type:'buffer'});
      const worksheetName=workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data=XLSX.utils.sheet_to_json(worksheet);
      setexcelData(data);

      excelData && excelData.map(async (mcq,index)=>{
        if((mcq.id-1)==index){
          console.log(mcq.id)
        const question = {
          statement: mcq.statement,
          option1: mcq.op1,
          option2: mcq.op2,
          option3: mcq.op3,
          option4: mcq.op4,
          answer: mcq.ans,
          dataTitle: dataName,
        };

        const response = await fetch("http://localhost:8080/data/newQues", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      Swal.fire("Good job!", "You clicked the button!", "success");
    }


    }});



    }
    else{

    }
  
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Upload an excel file</h1>
    <input type="file" onChange={handleFile}></input>
    <button type="submit">submit</button>
    </form>
      <div className="container-fluid bg-dark text-light py-3">
        <header className="text-center">
          <h1 className="display-6">Add Questions {dataName}</h1>
        </header>
      </div>
      <section className="container my-2 bg-dark w-50 text-light p-2">
        <form className="row g-3 p-3" method="post" onSubmit={onSubmitHandler}>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Question
            </label>
            <input
              name="Question"
              className="form-control"
              id="inputAddress"
              placeholder=""
              onChange={(e) => {
                setStatement(e.target.value);
              }}
              value={statement}
            ></input>
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Option 1
            </label>
            <input
              className="form-control"
              id="inputEmail4"
              name="a"
              onChange={(e) => {
                setOption1(e.target.value);
              }}
              value={option1}
            ></input>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Option 2
            </label>
            <input
              className="form-control"
              id="inputPassword4"
              name="b"
              onChange={(e) => {
                setOption2(e.target.value);
              }}
              value={option2}
            ></input>
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Options 3
            </label>
            <input
              className="form-control"
              id="inputEmail4"
              name="c"
              onChange={(e) => {
                setOption3(e.target.value);
              }}
              value={option3}
            ></input>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Options 4
            </label>
            <input
              name="d"
              className="form-control"
              onChange={(e) => {
                setOption4(e.target.value);
              }}
              value={option4}
            ></input>
          </div>

          <label for="inputCity" className="form-label">
            Correct Option
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            name="correct"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
          ></input>
          <button type="submit">Add MCQ</button>
        </form>
      </section>
    </>
  );
}
