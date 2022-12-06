import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  delay = delay === null ? process.env.REACT_APP_DEBOUNCE_TIMEOUT : delay;

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}
