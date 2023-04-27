import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Questionbox from "./Component/QuizContainer";
import Nav from "./Component/Nav";
import Adimin from "./Component/Admin/Admin";
import QuestionShow from "./Component/Quiz/QuestionShow";
import Questions from "./Component/Questions";
import Questiontemp from "./Component/Questiontemp";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" Component={Questionbox}></Route>
        <Route path="/admin" Component={Adimin}></Route>
        <Route path="/ques/:type" Component={Questiontemp}></Route>
      </Routes>
    </div>
  );
}
export default App;
