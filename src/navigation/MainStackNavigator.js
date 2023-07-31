import React from 'react';
import {Platform, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

// screen
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductWebViewScreen from '../screens/ProductWebViewScreen';

const Stack = createStackNavigator();
const isAndroid = Platform.OS === 'android';
const defaultScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFF'},
        gestureEnabled: !isAndroid,
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="ProductWebViewScreen"
        component={ProductWebViewScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
