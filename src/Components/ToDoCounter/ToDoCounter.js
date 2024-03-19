import "./ToDoCounter.css";

function ToDoCounter({ completedToDos, totalToDos, loading }) {
  return (
    loading ? <h1>
      Retrieving To - Do's 
    </h1> : (    <h1>
      You have completed {completedToDos} of {totalToDos} TO-DOs
    </h1>)
  );
}

export { ToDoCounter };
