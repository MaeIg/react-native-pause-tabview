import React, { useEffect, useState } from 'react';
import { SimpleList } from './SimpleList';

export const KillList = () => {
  const [key, setKey] = useState(1);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setKey(oldKey => -oldKey);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return <SimpleList key={key} />;
};
