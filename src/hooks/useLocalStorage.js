import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      //   console.log(stored);

      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error(`Error reading localStorage key "${key}":`, err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    //   console.log(JSON.stringify(value));
    
    } catch (err) {
      console.error(`Error saving localStorage key "${key}":`, err);
    }
  }, [key, value]);

  return [value, setValue];
}
