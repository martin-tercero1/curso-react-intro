import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };
