import { cloneElement, Children } from "react";
import { useNavigate } from "react-router-dom";
import "./ToDoTitle.css";

function ToDoTitle({name = "📃 New List", loading, children }) {
  const navigate = useNavigate();

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
      <button className="btn-title" onClick={() => navigate('/new')}>
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
