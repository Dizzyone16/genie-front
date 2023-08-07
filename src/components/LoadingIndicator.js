import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const LoadingIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size='large' color='#4880EE' />
    </View>
  )
}

export default LoadingIndicator
