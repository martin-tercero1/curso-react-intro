import { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

function ToDoCounter() {
  const { completed, total } = useContext(ToDoContext);

  return (
    <h1>
      You have completed {completed ? completed `of ${total} TODOS`  : '0 TODOS'}
    </h1>
  );
}

export { ToDoCounter };
