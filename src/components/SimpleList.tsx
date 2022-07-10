import React from 'react';
import { FlatList, Text } from 'react-native';

const DATA = Array(100)
  .fill(null)
  .map((_, index) => ({ key: `${index}`, text: `item ${index}` }));

export const SimpleList = () => {
  const renderItem = ({ item }: { item: { key: string; text: string } }) => (
    <Text>{item.text}</Text>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  );
};
