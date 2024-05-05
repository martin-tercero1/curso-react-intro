import React from "react";
import './ToDoIcon.css'
import {
  FaRegSquareCheck,
  FaRegSquare,
  FaRegTrashCan,
  FaPenToSquare,
} from "react-icons/fa6";

function ToDoIcon({type}) {
  const iconTypes = {
    check: <FaRegSquareCheck />,
    unchecked: <FaRegSquare />,
    delete: <FaRegTrashCan />,
    edit: <FaPenToSquare />,
  };

  return <>{iconTypes[type]}</>;
}

export { ToDoIcon };
