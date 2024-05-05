import { useNavigate } from "react-router-dom";
import { ToDoCounter } from "../../Components/ToDoCounter/ToDoCounter";
//import { ToDoCreateList } from "../ToDoCreateList/ToDoCreateList";
import { ToDoSearch } from "../../Components/ToDoSearch/ToDoSearch";
import { ToDoItem } from "../../Components/ToDoItem/ToDoItem";
import { ToDoList } from "../../Components/ToDoList/ToDoList";
import { ToDoTitle } from "../../Components/ToDoTitle/ToDoTitle";
import { ToDosLoading } from "../../Components/ToDosLoading/ToDosLoading";
import { ToDosError } from "../../Components/ToDosError/ToDosError";
import { ToDosEmpty } from "../../Components/ToDosEmpty/ToDosEmpty";
import { useToDos } from "../../useToDos";
import { Modal } from "../../Components/Modal";
import { ToDoForm } from "../../Components/ToDoForm/ToDoForm";
import { ChangeAlertWithStorageListener } from '../../Components/ChangeAlert'
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const {
      states,
      setters
  } = useToDos();

  const {
    totalToDos,
    searchValue,
    searchedToDos,
    checkUncheckToDo,
    toDos,
    loading,
    error,
  } = states;
  
  const {
    addToDo,
    deleteToDo,
    editToDo,
    completedToDos,
    setSearchValue,
    synchronizeToDos,
  } = setters;

  return (
    <>
      <ToDoTitle
        loading={loading}
      >
        <ToDoCounter completedToDos={completedToDos} totalToDos={totalToDos} />
      </ToDoTitle>

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <ToDoList
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        totalToDos={totalToDos}
        searchText={searchValue}
        onError={() => <ToDosError />}
        onLoading={() => <ToDosLoading />}
        onEmpty={() => <ToDosEmpty />}
        onEmptySearchResults={(searchText) => (
          <p>There are no results for: {searchText}</p>
        )}
        // <ToDoSearchEmpty />
      >
        {(toDo) => (
          <ToDoItem
            key={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            checkUncheckToDo={() => {
              checkUncheckToDo(toDo.id, toDos);
            }}
            onDelete={() => {
              deleteToDo(toDo.id, toDos);
            }}
            onEdit={() => {
              navigate('/edit/' + toDo.id,
              {
                state: { toDo }
              })
            }}
          />
        )}
      </ToDoList>

      <ChangeAlertWithStorageListener synchronize={synchronizeToDos} />
    </>
  );
}

export default Home;
