import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export const Timer = () => {
  const [timer, setTimer] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(oldTimer => oldTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return <Text>{timer}</Text>;
};
