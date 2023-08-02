import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import commaNumber from 'comma-number'

// components
import RatingInfo from './RatingInfo'

const ProductCard = ({product}) => {
  const navigation = useNavigation()
  const dims = useWindowDimensions()
  const ITEM_WIDTH = dims.width - 50

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'white',
    //     paddingBottom:
    //       insets.bottom > 30 ? insets?.bottom - 12 : insets?.bottom,
    //   }}>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'white', paddingBottom: 25, width: ITEM_WIDTH}}
        activeOpacity={1.0}
        onPress={() => {
          navigation.push('ProductDetailScreen', {
            catalogNumber: product?.catalogNumber,
          })
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* 상품이미지 */}
          <View
            style={{
              justifyContent: 'center',
              width: 130,
              height: 130,
            }}>
            <Image
              source={{uri: decodeURIComponent(product?.imageUrl)}}
              style={{
                width: '100%',
                height: '100%',
                borderWidth: 1,
                borderColor: '#D9D9D9',
                borderRadius: 16,
              }}
            />
          </View>
          {/* 상품내용 */}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 20,
              width: dims.width - 200,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                // flexWrap: 'wrap',
              }}
              numberOfLines={2}>
              {product?.title}
            </Text>
            <View
              style={{
                marginTop: 7,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: 14, color: '#EA3323'}}>최저가 </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#EA3323',
                  fontWeight: 'bold',
                }}>
                {commaNumber(product?.lowestPrice)}
              </Text>
              <Text style={{fontSize: 14, color: '#EA3323'}}>원</Text>
            </View>

            {/* rating score & count */}
            <RatingInfo
              ratingScore={product?.ratingScore}
              ratingCount={product?.ratingCount}
              style={{marginTop: 6}}
            />

            {product?.sellerCount > 0 && (
              <View style={{marginTop: 4}}>
                <Text style={{fontSize: 14, color: 'black'}}>
                  판매처 {commaNumber(product?.sellerCount)}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    // </View>
  )
}

export default ProductCard
