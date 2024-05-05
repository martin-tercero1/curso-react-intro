import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewToDo from "../Pages/NewToDo/NewToDo"
import EditToDo from "../Pages/EditToDo/EditToDo"
import Home from "../Pages/Home/Home"
import NotFound from "../Pages/NotFound/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<NewToDo />}></Route>
        <Route path="/edit/:id" element={<EditToDo />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App