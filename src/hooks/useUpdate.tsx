import { useEffect, useRef } from 'react';

const useUpdate = (deps: boolean, fn: () => void) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, [deps, fn]);
};
export default useUpdate;
