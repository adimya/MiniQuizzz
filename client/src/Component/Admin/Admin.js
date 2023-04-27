import UserQues from "./UserQues";
import Userdesc from "./Userdesc";
import { useState } from "react";

export default function Adimin() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      {!isShown && (
        <div>
          <Userdesc></Userdesc>
          {/* <button
            className="btn btn-info"
            style={{ width: "1300px" }}
            onClick={handleClick}
          >
            Add an MCQ
          </button> */}
        </div>
      )}

      {/* {isShown && <UserQues></UserQues>} */}
    </>
  );
}
