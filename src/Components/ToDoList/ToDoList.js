import React from 'react';
import './ToDoList.css';

function ToDoList({
  error,
  loading,
  searchedToDos,
  totalToDos,
  searchText,
  onError,
  onLoading,
  onEmpty,
  onEmptySearchResults,
  render,
  children
}) {
  const renderFunc = children || render

  return (
    <ul className="ToDoList">
      {error && onError()}
      {loading && onLoading()}
      {!loading && totalToDos === 0 && onEmpty()}
      {!loading && totalToDos > 0 && !searchedToDos.length && onEmptySearchResults(searchText)}

      {(!loading && !error) && searchedToDos.map(renderFunc)}
    </ul>
  );
}

export { ToDoList };