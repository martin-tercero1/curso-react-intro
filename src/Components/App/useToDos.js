import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
  const {
    items: toDos,
    saveItems: saveToDos,
    synchronize: synchronizeToDos,
    loading,
    error,
  } = useLocalStorage("TODOS", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedToDos = toDos.filter((toDo) => toDo.completed === true).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
    const searchText = searchValue.toLowerCase();
    const todoText = toDo.text.toLowerCase();

    return todoText.includes(searchText);
  });

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text,
      completed: false,
    })
    saveToDos(newToDos);
  }

  const checkUncheckToDo = (text, toDos) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
    saveToDos(newToDos);
  };

  const deleteToDo = (text, toDos) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  const states = {
    totalToDos,
    searchValue,
    searchedToDos,
    checkUncheckToDo,
    toDos,
    loading,
    error,
    openModal,
  };

  const setters = {
    setOpenModal,
    addToDo,
    deleteToDo,
    completedToDos,
    setSearchValue,
    synchronizeToDos,
  };



  return {
    states, setters
  };
}

export { useToDos };

// localStorage.removeItem('TODOS');
// const defaultToDos = [
//   { text: "Purchase fruits and vegetables", completed: true },
//   { text: "Buy milk", completed: false },
//   { text: "LALALA", completed: true },
//   { text: "lala", completed: false },
// ];

// const stringifiedToDos = JSON.stringify(defaultToDos);
// localStorage.setItem("TODOS", stringifiedToDos);
