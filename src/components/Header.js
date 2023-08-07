import {View, TouchableOpacity, TextInput, Platform} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

// utils
import ImageUtil from '../utils/ImageUtil'

// imags
import Back from '../images/Back.png'
import Search from '../images/Search.png'
import {useNavigation} from '@react-navigation/native'

const Header = ({headerType, title, query, handleSearch, setQuery}) => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const renderHeaderContent = () => {
    switch (headerType) {
      case 'search':
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderRadius: 12,
              alignItems: 'center',
              marginLeft: 12,
              backgroundColor: '#F2F3F5',
              marginTop: Platform.OS === 'ios' ? 0 : 11,
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
                height: 44,
                alignItems: 'center',
                color: 'black',
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
        )
      default:
        return null
    }
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: insets?.top,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 25,
        height: Platform.OS === 'ios' ? 48 : 55,
        zIndex: 999,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ImageUtil source={Back} style={{width: 11, height: 18}} />
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center'}}>
        {renderHeaderContent()}
      </View>
    </View>
  )
}

export default Header
