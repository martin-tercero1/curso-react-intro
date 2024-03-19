import { cloneElement, Children } from "react";
import "./ToDoTitle.css";

function ToDoTitle({setOpenModal, name = "📃 New List", loading, children }) {
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <div className="title">
      <button className="btn-title">
        <img
          src="https://img.icons8.com/ios/36/F25551/circled-left-2.png"
          alt="circled-left-2"
        />
      </button>
      <div className="list-name">
        <span>{name}</span>
        <img alt=""></img>
      </div>
      {Children.toArray(children).map(child => cloneElement(child, { loading })) }
      <button className="btn-title">
        <img
          src="https://img.icons8.com/ios/24/F25551/delete--v1.png"
          alt="delete--v1"
        />
        Delete List
      </button>
      <button className="btn-title" onClick={handleOpenModal}>
        <img
          src="https://img.icons8.com/ios/24/F25551/plus-2-math.png"
          alt="plus-2-math"
        />
        Add to-do
      </button>
    </div>
  );
}

export { ToDoTitle };
