import React from "react";
import "./ToDoItem.css";
import { ToDoIcon } from "../ToDoIcon/ToDoIcon";

function ToDoItem({ text, completed, checkUncheckToDo, onDelete, onEdit }) {
  return (
    <li className="ToDoItem">
      <div className="ToDoTask">
        {completed ? (
          <>
            <button onClick={checkUncheckToDo} className="Icon Icon-check">
              <ToDoIcon type="check" />
            </button>
            <p className="task-completed">{text}</p>
          </>
        ) : (
          <>
            <button onClick={checkUncheckToDo} className="Icon Icon-uncheck">
              <ToDoIcon type="unchecked" />
            </button>
            <p className="task-uncompleted">{text}</p>
          </>
        )}
      </div>

      <div className="Icons-container">
        <button className="Icon Icon-edit" onClick={onEdit}>
          <ToDoIcon type="edit" />
        </button>
        
        <button className="Icon Icon-delete" onClick={onDelete}>
          <ToDoIcon type="delete" />
        </button>
      </div>
    </li>
  );
}

export { ToDoItem };
