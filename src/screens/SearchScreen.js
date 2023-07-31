import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, FlatList} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

// components
import ProductCard from '../components/ProductCard';

// utils
import ImageUtil from '../utils/ImageUtil';
import Header from '../components/Header';

const SearchScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([
    {
      id: 1,
      title: 'Product 1',
      price: 99000,
      imageUri:
        'https://shopping-phinf.pstatic.net/main_2796542/27965424524.20210712124450.jpg?type=f640',
      ratingScore: 4.5,
      ratingCount: 250,
      sellerCount: 50,
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20000,
      imageUri:
        'https://shopping-phinf.pstatic.net/main_2796542/27965424524.20210712124450.jpg?type=f640',
      ratingScore: 4.2,
      ratingCount: 150,
      sellerCount: 30,
    },
  ]);

  const handleSearch = async query => {
    if (query.trim() === '') {
      return;
    } else {
      const result = await backendApis.getSearchResults(query, 0);
      if (result?.status === 200) {
        if (result?.data?.length > 0) {
          setSearchResult(result?.data);
        }
      }
      // Perform search or API request with the searchQuery
      // You can store the search result in a state or pass it as params to the next screen
      // For this example, let's just navigate to the search result screen without actual search
      navigation.navigate('SearchResult', {searchQuery});
    }
  };

  const keyExtractor = (item, index) => item.id.toString();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Header
        headerType={'search'}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      {/* <View
        style={{
          position: 'absolute',
          top: insets?.top,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 25,
          height: 48,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ImageUtil source={Back} style={{width: 11, height: 18}} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 12,
            alignItems: 'center',
            marginLeft: 12,
            backgroundColor: '#F2F3F5',
          }}>
          <ImageUtil
            source={Search}
            style={{width: 16.25, height: 15.75, marginLeft: 14}}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              borderRadius: 12,
              paddingVertical: 8,
              paddingHorizontal: 15,
              minHeight: 44,
              height: 'auto',
            }}
            placeholder='상품을 검색해보세요'
            placeholderTextColor='#8D94A0'
            keyboardType='default'
            autoFocus={true}
            returnKeyType='search'
            onSubmitEditing={() => handleSearch(query)}
            value={query}
            onChangeText={async text => {
              setQuery(text)
            }}
          />
        </View>
      </View> */}

      {searchResult?.length === 0 ? (
        <Text style={StyleSheet.noResultsText}>검색 결과가 없어요</Text>
      ) : (
        <ScrollView style={{paddingTop: insets.top + 48}}>
          <View style={{paddingHorizontal: 25, paddingTop: 32}}>
            <FlatList
              data={searchResult}
              renderItem={({item}) => <ProductCard product={item} />}
              keyExtractor={keyExtractor}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SearchScreen;
