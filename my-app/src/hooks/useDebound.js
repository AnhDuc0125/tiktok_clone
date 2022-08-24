import { useEffect, useState } from 'react';

const useDebound = (value, delay) => {
  const [deboundValue, setDeboundValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboundValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return deboundValue;
};

export default useDebound;
