import { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {
  const { searchValue, setSearchValue } = useContext(ToDoContext);

  return (
    <div className="ToDoSearch">
      <input
        className="Search-input"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
          console.log(event.target.value);
        }}
        placeholder="Type here to start filtering"
      ></input>
    </div>
  );
}

export { ToDoSearch };
