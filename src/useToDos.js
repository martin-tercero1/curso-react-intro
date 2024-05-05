import { useState } from "react";
import { v4 as uuid} from "uuid";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
  const {
    items: toDos,
    saveItems: saveToDos,
    synchronize: synchronizeToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedToDos = toDos.filter((toDo) => toDo.completed === true).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
    const searchText = searchValue.toLowerCase();
    const todoText = toDo.text.toLowerCase();

    return todoText.includes(searchText);
  });

  const getToDo = (id) => {
    return toDos.find(toDo => toDo.id === id);
  }

  const generateId = () => uuid();

  const addToDo = (text) => {
    const newToDos = [...toDos];
    const id = generateId()

    newToDos.push({
      text,
      completed: false,
      id
    })
    saveToDos(newToDos);
  }

  const checkUncheckToDo = (id, toDos) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.id === id);
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed;
    saveToDos(newToDos);
  };

  const editToDo = (id, newText) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.id === id);
    newToDos[toDoIndex].text = newText;
    saveToDos(newToDos);
  };

  const deleteToDo = (id, toDos) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.id === id);
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  const states = {
    totalToDos,
    searchValue,
    searchedToDos,
    checkUncheckToDo,
    toDos,
    getToDo,
    loading,
    error,
  };

  const setters = {
    addToDo,
    deleteToDo,
    editToDo,
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
