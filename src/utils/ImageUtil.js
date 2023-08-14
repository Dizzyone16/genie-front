import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

const ImageUtil = ({source, style, size}) => {
  if (!source) {
    return <View style={[styles.container, style]} />
  }

  return <Image source={source} style={[{width: size, height: size}, style]} />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
})

export default ImageUtil
