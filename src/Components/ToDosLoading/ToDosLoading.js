import React from "react";
import './ToDoLoading.css';
import {ToDoIcon} from '../ToDoIcon/ToDoIcon';

function ToDosLoading() {
  return (
    <>
      <li className="ToDoItem ToDoLoadingItem">
        <div className="ToDoTask ToDoLoadingTask">
          <button className="Icon Icon-uncheck IconLoading">
            <ToDoIcon type="unchecked" color="gray" />
          </button>
          <p className="TaskLoadingText"></p>
        </div>

        <button className="Icon Icon-delete">
          <ToDoIcon type="delete" color="gray" />
        </button>
      </li>

      <li className="ToDoItem ToDoLoadingItem">
        <div className="ToDoTask ToDoLoadingTask">
          <button className="Icon Icon-uncheck IconLoading">
            <ToDoIcon type="unchecked" color="gray" />
          </button>
          <p className="TaskLoadingText"></p>
        </div>

        <button className="Icon Icon-delete">
          <ToDoIcon type="delete" color="gray" />
        </button>
      </li>

      <li className="ToDoItem ToDoLoadingItem">
        <div className="ToDoTask ToDoLoadingTask">
          <button className="Icon Icon-uncheck IconLoading">
            <ToDoIcon type="unchecked" color="gray" />
          </button>
          <p className="TaskLoadingText"></p>
        </div>

        <button className="Icon Icon-delete">
          <ToDoIcon type="delete" color="gray" />
        </button>
      </li>

      <li className="ToDoItem ToDoLoadingItem">
        <div className="ToDoTask ToDoLoadingTask">
          <button className="Icon Icon-uncheck IconLoading">
            <ToDoIcon type="unchecked" color="gray" />
          </button>
          <p className="TaskLoadingText"></p>
        </div>

        <button className="Icon Icon-delete">
          <ToDoIcon type="delete" color="gray" />
        </button>
      </li>

      <li className="ToDoItem ToDoLoadingItem">
        <div className="ToDoTask ToDoLoadingTask">
          <button className="Icon Icon-uncheck IconLoading">
            <ToDoIcon type="unchecked" color="gray" />
          </button>
          <p className="TaskLoadingText"></p>
        </div>

        <button className="Icon Icon-delete">
          <ToDoIcon type="delete" color="gray" />
        </button>
      </li>

      
    </>
  );
}

export { ToDosLoading };
