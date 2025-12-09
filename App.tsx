import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import DetailView from './src/screens/DetailView/DetailView';
//import HistoryView from './src/screens/History/HistoryView';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailView} />
        {/* <Stack.Screen name="History" component={HistoryView} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
