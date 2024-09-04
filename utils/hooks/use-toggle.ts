import { useState, useCallback } from "react";

const useToggle = (
  initialValue = false
): [boolean, () => void, (value: boolean) => void] => {
  const [toggle, setToggle] = useState(initialValue);

  const setterFunction = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const setToValue = useCallback((value: boolean) => {
    setToggle(value);
  }, []);

  return [toggle, setterFunction, setToValue];
};

export default useToggle;
