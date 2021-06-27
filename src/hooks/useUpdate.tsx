import { useEffect, useState } from 'react';

const useUpdate = (deps: boolean, fn: () => void) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [count, deps]);
  useEffect(() => {
    if (count > 1) {
      fn();
    }
  }, [count, fn]);
};
export default useUpdate;
