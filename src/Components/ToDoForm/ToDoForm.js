import React, { useState } from "react";
import "./ToDoForm.css";

function ToDoForm({ setOpenModal , addToDo}) {
  const [newToDoValue, setNewToDoValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  const handleCancel = (event) => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
      <label className="ToDoForm-label">Write your new To-Do</label>
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
          Add
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
