import React, { useState } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TabView } from 'react-native-tab-view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableFreeze } from 'react-native-screens';
import { Freeze } from 'react-freeze';

import { KillList } from '../components/KillList';

// It is to natively enable freeze on react-native-screens (no need to use react-freeze here)
enableFreeze();

const FirstRoute = ({ isSelected }: { isSelected: boolean }) => {
  const navigation = useNavigation();

  return (
    <Freeze freeze={!isSelected}>
      <Button
        title="Go to Details"
        // @ts-ignore
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.tab1}>
        <KillList />
      </View>
    </Freeze>
  );
};

const SecondRoute = () => <View style={styles.tab2} />;

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
];

const renderSceneWithIndex =
  ({ index }: { index: number }) =>
  ({ route }: { route: { key: string; title: string } }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute isSelected={index === 0} />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const renderScene = renderSceneWithIndex({ index });

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
    backgroundColor: '#ffffff',
  },
  tab2: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
});

export default App;
