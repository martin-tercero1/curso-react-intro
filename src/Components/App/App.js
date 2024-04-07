import "./App.css";
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
//import { ToDoCreateList } from "../ToDoCreateList/ToDoCreateList";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoTitle } from "../ToDoTitle/ToDoTitle";
import { ToDosLoading } from "../ToDosLoading/ToDosLoading";
import { ToDosError } from "../ToDosError/ToDosError";
import { ToDosEmpty } from "../ToDosEmpty/ToDosEmpty";
import { useToDos } from "./useToDos";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ChangeAlertWithStorageListener } from '../ChangeAlert'

function App() {
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
    openModal,
  } = states;
  
  const {
    setOpenModal,
    addToDo,
    deleteToDo,
    completedToDos,
    setSearchValue,
    synchronizeToDos,
  } = setters;

  return (
    <>
      <ToDoTitle
        openModal={openModal}
        setOpenModal={setOpenModal}
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
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            checkUncheckToDo={() => {
              checkUncheckToDo(toDo.text, toDos);
            }}
            deleteToDo={() => {
              deleteToDo(toDo.text, toDos);
            }}
          />
        )}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm setOpenModal={setOpenModal} addToDo={addToDo}></ToDoForm>
        </Modal>
      )}

      <ChangeAlertWithStorageListener synchronize={synchronizeToDos} />
    </>
  );
}

export default App;
