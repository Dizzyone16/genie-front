import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar style={{backgroundColor: 'white'}} />
    </SafeAreaView>
  )
}

export default SplashScreen
