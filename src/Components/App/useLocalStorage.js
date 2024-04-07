import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initalState(initialValue));

  const { items, loading, error, sync  } = state;

  // Action Creators
  const onError = (error) => dispatch({type: actionTypes.ERROR, payload: error});
  const onSuccess = (parsedItems) => dispatch({type: actionTypes.SUCCESS, payload: parsedItems});
  const onSave = (newItems) => dispatch({type: actionTypes.SAVE, payload: newItems});
  const onSynchronize = () => dispatch({type: actionTypes.SYNCHRONIZE});

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);

        let parsedItems;

        if (localStorageItems) {
          parsedItems = JSON.parse(localStorageItems);
          
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        }

        onSuccess(parsedItems);
      } catch (error) {
        onError(error)
      }
    }, 2000);
  }, [sync]);

  const saveItems = (newItems) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      onSave(newItems);
    } catch(error) {
      onError(error);
    }
  };

  // I leave it like this just to maintain the structure of the code
  const synchronize = () => {
    onSynchronize();
  }

  return { items, saveItems, loading, error, synchronize };
}

const initalState = (initialValue) => ({
  sync: true,
  error: false,
  loading: true,
  items: initialValue
});

const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  SYNCHRONIZE: 'SYNCHRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    loading: false,
    error: false,
    sync: true,
    items: payload,
  },
  [actionTypes.SAVE]: {
    ...state,
    items: payload,
  },
  [actionTypes.SYNCHRONIZE]: {
    ...state,
    sync: false,
    loading: true,
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };
