import { useRef } from "react";

function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const func = useRef(fn);
  func.current = fn;

  return function(...args: any) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func.current(...args);
    }, delay);
  };
}
export default useDebounce;