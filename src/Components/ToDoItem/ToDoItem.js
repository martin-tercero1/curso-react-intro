import React from "react";
import "./ToDoItem.css";
import { ToDoIcon } from "../ToDoIcon/ToDoIcon";

function ToDoItem({ text, completed, checkUncheckToDo, deleteToDo }) {
  return (
    <li className="ToDoItem">
      <div className="ToDoTask">
        {completed ? (
          <>
            <button onClick={checkUncheckToDo} className="Icon Icon-check">
              <ToDoIcon type="check" color="gray" />
            </button>
            <p className="task-completed">{text}</p>
          </>
        ) : (
          <>
            <button onClick={checkUncheckToDo} className="Icon Icon-uncheck">
              <ToDoIcon type="unchecked" color="gray" />
            </button>
            <p className="task-uncompleted">{text}</p>
          </>
        )}
      </div>

      <button className="Icon Icon-delete" onClick={deleteToDo}>
        <ToDoIcon type="delete" color="gray" />
      </button>
    </li>
  );
}

export { ToDoItem };
