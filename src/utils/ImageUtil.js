import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'

const ImageUtil = ({source, style, size}) => {
  if (!source) {
    return <View style={[styles.container, style]} />
  }

  return (
    <FastImage source={source} style={[{width: size, height: size}, style]} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
})

export default ImageUtil
