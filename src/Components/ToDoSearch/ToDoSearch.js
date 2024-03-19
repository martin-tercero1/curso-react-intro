import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <div className="ToDoSearch">
      <input
        className="Search-input"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        placeholder="Type here to start filtering"
        disabled={loading}
      ></input>
    </div>
  );
}

export { ToDoSearch };
