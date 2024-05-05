import { useParams, useLocation } from "react-router-dom";
import { ToDoForm } from "../../Components/ToDoForm/ToDoForm";
import { useToDos } from "../../useToDos";
import "./EditToDo.css";

function EditToDo() {
  const { states, setters } = useToDos();
  const { editToDo } = setters;
  const { loading, getToDo } = states;
  
  const params = useParams();
  const id = params.id;

  const location = useLocation();

  let toDoText;
  
  if (location.state?.toDo) {
    toDoText = location.state.toDo.text;
  } else if (loading) {
    return <p>loading</p>;
  } else {
    const toDo = getToDo(id);
    toDoText = toDo?.text;
  }

  return (
    <main className="New-container">
      <ToDoForm
        label="Edit"
        submitText="Edit"
        defaultToDoText={toDoText}
        submitEvent={(newText) => editToDo(id, newText)}
      />
    </main>
  );
}

export default EditToDo;
