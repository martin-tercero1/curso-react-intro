import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ToDoForm.css";

function ToDoForm({ submitEvent, label, defaultToDoText, submitText }) {
  const navigate = useNavigate();

  const [newToDoValue, setNewToDoValue] = useState(defaultToDoText || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitEvent(newToDoValue);
    navigate('/')
  };

  const handleCancel = (event) => {
    navigate('/');
  };

  const handleChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
      <h2>
        <label className="ToDoForm-label">{label} your new To-Do</label>
      </h2>
      <textarea
        className="ToDoForm-textarea"
        onChange={handleChange}
        value={newToDoValue}
        placeholder="Cut onions for dinner"
        required
      />
      <div className="ToDoForm-buttonsContainer">
        <button
          onClick={handleCancel}
          type="button"
          className="ToDoForm-button ToDoForm-button--cancel"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ToDoForm-button ToDoForm-button--submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
