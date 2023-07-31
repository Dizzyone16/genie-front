import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFF'},
        gestureEnabled: false,
      }}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
