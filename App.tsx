import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const Timer = () => {
  const [timer, setTimer] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(oldTimer => oldTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return <Text>{timer}</Text>;
};

const FirstRoute = () => {
  return <View style={styles.tab1}>{Array(300).fill(<Timer />)}</View>;
};

const SecondRoute = () => <View style={styles.tab2} />;

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
];

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const App = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  tab1: {
    flex: 1,
    backgroundColor: '#ff4081',
    alignItems: 'flex-end',
  },
  tab2: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
});

export default App;
