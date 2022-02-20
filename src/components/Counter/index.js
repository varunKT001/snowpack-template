import React, { useState, useEffect } from 'react';

const index = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default index;
