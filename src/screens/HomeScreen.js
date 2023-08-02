import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import FastImage from 'react-native-fast-image'

// utils
import ImageUtil from '../utils/ImageUtil'

//images
import Search from '../images/Search.png'

const HomeScreen = ({navigation}) => {
  const genie = require('../images/Genie.png')

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <View
        style={{
          flex: 0.7,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <FastImage source={genie} style={{width: 144, height: 48}} />
        </View>

        {/* Search Section */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.searchSection}
            onPress={() => navigation.navigate('SearchScreen')}>
            <ImageUtil
              source={Search}
              style={{width: 16.25, height: 15.75, marginLeft: 14}}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#C6C6C6',
                lineHeight: 16.8,
                paddingLeft: 15,
              }}>
              상품을 검색해보세요
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    marginTop: 32,
    flexDirection: 'row',
    height: 44,
  },
  searchContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  searchSection: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    height: 44,
    borderRadius: 12,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default HomeScreen
