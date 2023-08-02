import React, {useState} from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

// components
import ProductCard from '../components/ProductCard'

// utils
import Header from '../components/Header'
import backendApi from '../utils/backendApi'

const SearchScreen = () => {
  const insets = useSafeAreaInsets()

  const [query, setQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = async query => {
    if (query.trim() === '') {
      return
    } else {
      setSearchResult([])
      const result = await backendApi.getSearchResults(query, 0)
      if (result?.status === 200) {
        if (result?.data?.length > 0) {
          setSearchResult(result?.data)
        }
      }
    }
  }

  // const keyExtractor = (item, index) => item.id.toString();

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

      {searchResult?.length === 0 ? (
        <Text style={styles.noResultsText}>검색 결과가 없어요</Text>
      ) : (
        <View style={{paddingTop: insets.top + 48}}>
          <View style={{paddingTop: 32}}>
            <FlatList
              data={searchResult}
              renderItem={({item}) => <ProductCard product={item} />}
              contentContainerStyle={{marginHorizontal: 25}}
              // keyExtractor={keyExtractor}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
  },
})

export default SearchScreen
