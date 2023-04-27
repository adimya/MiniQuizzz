import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import UserQues from "./UserQues";

export default function Userdesc() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  const addDataHandler = async (e) => {
    e.preventDefault();

    const data = { name, desc, url };

    const response = await fetch("http://localhost:8080/data/newdata", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    Swal.fire("Data Added!", "Add Some MCQS!", "success");
    setisSubmit(true);
    const json = await response.json();
  };

  return (
    <>
      <div className="container-fluid">
        <blockquote className="blockquote text-center ">
          <p className="mb-0">About Your Quiz</p>
        </blockquote>
      </div>
      <form method="post" onSubmit={addDataHandler}>
        <div className="container-md border border-dark">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Name of Your Quiz
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="formGroupExampleInput"
              placeholder=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="des"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Url of Image
            </label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit">Add Data</button>
        </div>
      </form>
      {isSubmit && <UserQues dataName={name}></UserQues>}
    </>
  );
}
