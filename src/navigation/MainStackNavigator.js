import React, {useEffect} from 'react'
import {Platform} from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

// screen
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductWebViewScreen from '../screens/ProductWebViewScreen'
import SplashScreen from '../screens/SplashScreen'
import {useNavigation} from '@react-navigation/native'
import AuthStore from '../stores/AuthStore'
import backendApi from '../utils/backendApi'

const Stack = createStackNavigator()
const isAndroid = Platform.OS === 'android'
const defaultScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

const MainStackNavigator = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const handleInitialScreen = async () => {
      try {
        const isLoggedIn = await AuthStore?.loadToken()
        if (isLoggedIn) {
          navigation.reset({
            routes: [{name: 'HomeScreen'}],
          })
          backendApi.logEvent('login')
        } else {
          navigation.reset({
            routes: [{name: 'LoginScreen'}],
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
    handleInitialScreen()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFF'},
        gestureEnabled: !isAndroid,
      }}>
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{cardStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name='ProductDetailScreen'
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name='ProductWebViewScreen'
        component={ProductWebViewScreen}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
