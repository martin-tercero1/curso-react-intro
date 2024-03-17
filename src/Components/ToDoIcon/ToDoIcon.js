import React from "react";
import './ToDoIcon.css'
import { FaRegSquareCheck, FaRegSquare, FaRegTrashCan } from "react-icons/fa6";

function ToDoIcon({type, color}) {
  const iconTypes = {
    check: <FaRegSquareCheck/>,
    unchecked: <FaRegSquare/>,
    delete: <FaRegTrashCan/>,
  };

  return <>{iconTypes[type]}</>;
}

export { ToDoIcon };
