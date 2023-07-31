import React from 'react'
import {View, Text} from 'react-native'

const SearchResultScreen = ({route}) => {
  const {searchQuery} = route.params

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search Results for: {searchQuery} </Text>
      {/* Display the search results here */}
    </View>
  )
}

export default SearchResultScreen
