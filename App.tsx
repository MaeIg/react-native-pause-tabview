import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  const navigation = useNavigation();

  return (
    <View style={styles.tab1}>
      <Button
        title="Go to Details"
        // @ts-ignore
        onPress={() => navigation.navigate('Details')}
      />
      {Array(300).fill(<Timer />)}
    </View>
  );
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

const HomeScreen = () => {
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

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
