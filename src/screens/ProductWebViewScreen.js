import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native'
import WebView from 'react-native-webview'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

// components
import Header from '../components/Header'

const ProductWebViewScreen = ({route}) => {
  const {uri} = route?.params
  const insets = useSafeAreaInsets()
  const dims = useWindowDimensions()

  const LoadingIndicatorOnWebView = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: (dims?.height - 48) / 2,
          left: (dims?.width - 32) / 2,
        }}>
        <ActivityIndicator size='large' color='#4880EE' />
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <WebView
        style={{flex: 1, marginTop: insets.top}}
        source={{uri: uri}}
        javaScriptEnabled={true}
        renderLoading={() => <LoadingIndicatorOnWebView />}
        startInLoadingState={true}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default ProductWebViewScreen
