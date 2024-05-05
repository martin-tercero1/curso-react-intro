import { useToDos } from "../../useToDos";
import { ToDoForm } from "../../Components/ToDoForm/ToDoForm"
import './NewToDo.css'

function NewToDo() {
  const { setters } = useToDos();
  const { addToDo } = setters;

  return (
    <main className="New-container">
      <ToDoForm 
    label="Write"
    submitText="Add"
    submitEvent={(text) => addToDo(text)}
    />
    </main>
  );
}

export default NewToDo