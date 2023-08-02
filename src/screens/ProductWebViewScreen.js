import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import WebView from 'react-native-webview'

// components
import Header from '../components/Header'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const ProductWebViewScreen = ({route}) => {
  const {uri} = route?.params
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <WebView style={{flex: 1, marginTop: insets.top}} source={{uri: uri}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default ProductWebViewScreen
