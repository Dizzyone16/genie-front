import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

// utils
import ImageUtil from '../utils/ImageUtil';

const HomeScreen = ({navigation}) => {
  const genie = require('../images/Genie.png');

  useEffect(() => {
    if (Platform.OS === 'android') {
      console.log('durl');
      StatusBar.setBackgroundColor('#FFFFFF');
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* <View style={{flex: 1}}>
        <ImageUtil source={genie} size={12} />
      </View> */}
      <View style={styles.container}>
        {/* Search Section */}
        <TouchableOpacity
          style={styles.searchSection}
          onPress={() => navigation.navigate('SearchScreen')}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
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
});

export default HomeScreen;
