import React, { useContext } from "react";
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
//import { ToDoCreateList } from "../ToDoCreateList/ToDoCreateList";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoTitle } from "../ToDoTitle/ToDoTitle";
import { ToDosLoading } from "../ToDosLoading/ToDosLoading";
import { ToDosError } from "../ToDosError/ToDosError";
import { ToDosEmpty } from "../ToDosEmpty/ToDosEmpty";
import { ToDoContext } from "../ToDoContext";

function AppUI() {
  const {
    toDos,
    searchedToDos,
    checkUncheckToDo,
    deleteToDo,
    loading,
    error,
  } = useContext(ToDoContext);

  return (
    <>
      <ToDoTitle>
        <ToDoCounter />
      </ToDoTitle>
      {searchedToDos.length > 0 && <ToDoSearch />}
      <ToDoList>
        {loading && (
          <>
            <ToDosLoading />
            <ToDosLoading />
            <ToDosLoading />
          </>
        )}
        {error && <ToDosError />}
        {!loading && searchedToDos.length === 0 && <ToDosEmpty />}
        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            checkUncheckToDo={() => {
              checkUncheckToDo(toDo.text, toDos);
            }}
            deleteToDo={() => {
              deleteToDo(toDo.text, toDos);
            }}
            toDos={toDos}
          />
        ))}
      </ToDoList>
    </>
  );
}

export { AppUI };
