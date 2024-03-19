import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sync, setSync] = useState(true);

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

        setItems(parsedItems);
        setLoading(false);
        setSync(true);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sync]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  const synchronize = () => {
    setLoading(true);
    setSync(false);
  }

  return { items, saveItems, loading, error, synchronize };
}

export { useLocalStorage };
