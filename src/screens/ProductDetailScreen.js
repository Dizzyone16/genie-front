import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import ImageUtil from '../utils/ImageUtil'
import RatingInfo from '../components/RatingInfo'
import commaNumber from 'comma-number'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Header from '../components/Header'
import {useNavigation} from '@react-navigation/native'
import {BlurView} from '@react-native-community/blur'
import backendApi from '../utils/backendApi'

const ArrowForward = require('../images/ArrowForward.png')

const Divider = () => <View style={{height: 18, backgroundColor: '#F5F5F5'}} />

const ProductDetailScreen = ({route}) => {
  const {catalogNumber} = route?.params
  const dims = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const screenWidth = dims.width
  const [productDetailData, setProductDetailData] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await backendApi?.getProductDetailData(catalogNumber)
        if (result?.status === 200) {
          if (result?.data) {
            setProductDetailData(result?.data)
          }
        }
        backendApi.logEvent('catalog_click', {catalogNumber: catalogNumber})
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <StatusBar style={{backgroundColor: 'white'}} />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingBottom:
            insets.bottom > 30 ? insets?.bottom + 46 : insets?.bottom + 58,
        }}>
        <Header />

        {Object.keys(productDetailData).length > 0 && (
          <>
            <ScrollView
              contentContainerStyle={{
                ...styles?.scrollContentContainer,
              }}
              style={{flex: 1, paddingTop: insets.top + 48}}>
              {/* 이미지 */}
              <View
                style={{
                  width: screenWidth,
                  aspectRatio: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{
                    uri: decodeURIComponent(productDetailData?.imageUrl),
                  }}
                  style={{width: screenWidth, height: screenWidth}}
                />
              </View>

              {/* 상품 정보 */}
              <View
                style={{
                  paddingHorizontal: 25,
                  paddingTop: 30,
                  marginBottom: 42,
                }}>
                {/* 타이틀 */}
                <View>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
                    {productDetailData?.title}
                  </Text>
                </View>

                {/* 평점 및 리뷰 개수 */}
                <RatingInfo
                  ratingScore={productDetailData?.ratingScore}
                  ratingCount={productDetailData?.ratingCount}
                  style={{marginTop: 8}}
                />

                {/* 가격 정보 */}
                <View
                  style={{
                    marginTop: 14,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <View
                      style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                      <Text style={{fontSize: 20, color: '#EA3323'}}>
                        최저가{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 22,
                          color: '#EA3323',
                          fontWeight: 'bold',
                        }}>
                        {commaNumber(productDetailData?.lowestPrice)}
                      </Text>
                      <Text style={{fontSize: 20, color: '#EA3323'}}>원 </Text>
                    </View>
                    {productDetailData?.originalPrice && (
                      <View style={{marginTop: 8}}>
                        <Text
                          style={{
                            fontSize: 16,
                            textDecorationLine: 'line-through',
                          }}>
                          {commaNumber(productDetailData?.originalPrice)}원
                        </Text>
                      </View>
                    )}

                    <View style={{marginTop: 4}}>
                      <Text style={{fontSize: 14}}>배송비 포함</Text>
                    </View>
                  </View>

                  {/* 아이폰일때만.. */}
                  {/* <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 13,
                borderRadius: 16,
                backgroundColor: '#4880EE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  navigation.navigate('ProductWebViewScreen', {
                    url: productDetailData?.mall_list[0].mall_url,
                  });
                }}>
                <Text style={{fontSize: 16, color: 'white'}}>
                  최저가 구매하기
                </Text>
              </TouchableOpacity>
            </View> */}
                </View>
              </View>

              {/* low price mall list */}
              <Divider />

              <View style={{marginTop: 32, paddingHorizontal: 25}}>
                <View style={{marginBottom: 20}}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    판매처
                  </Text>
                </View>
                {productDetailData?.mallList?.map((mall, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: 60,
                      }}
                      activeOpacity={0.8}
                      onPress={() => {
                        navigation.navigate('ProductWebViewScreen', {
                          uri: mall?.mallUrl,
                        })
                        backendApi.logEvent('mallSelect', {
                          productName: productDetailData?.title,
                          mallName: mall?.sellerName,
                          url: mall?.mallUrl,
                        })
                      }}>
                      <View>
                        <Text style={{fontSize: 18, color: 'black'}}>
                          {mall?.sellerName}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: index === 0 ? '#EA3323' : 'black',
                          }}>
                          {commaNumber(mall?.price)}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: index === 0 ? '#EA3323' : 'black',
                          }}>
                          원{' '}
                        </Text>
                        <View style={{justifyContent: 'center', marginLeft: 2}}>
                          <ImageUtil
                            source={ArrowForward}
                            style={{height: 12, width: 8}}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </ScrollView>

            {/* Bottom Order Bar */}
            {/* <BlurView
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 58,
          }}
          blurType='light' // Change blurType as desired (e.g., "light", "dark", "extraLight", etc.)
          blurAmount={100} // Adjust the blur amount as needed
          reducedTransparencyFallbackColor='white'
        /> */}
            <View
              style={{
                position: 'absolute',
                flex: 1,
                bottom: 0,
                left: 0,
                right: 0,
                height: 58,
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={{
                    marginHorizontal: 20,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4880EE',
                    borderRadius: 16,
                  }}
                  onPress={() => {
                    navigation.navigate('ProductWebViewScreen', {
                      uri: productDetailData?.lowestPriceUrl,
                    })
                    backendApi.logEvent('mallSelect', {
                      productName: productDetailData?.title,
                      mallName: productDetailData?.mallList[0]?.sellerName,
                      url: productDetailData?.mallList[0]?.mallUrl,
                    })
                  }}>
                  <Text style={{color: 'white', fontSize: 18}}>구매하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productInfoContainer: {
    marginVertical: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratings: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  siteListContainer: {
    marginTop: 16,
  },
  siteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  siteName: {
    fontSize: 16,
  },
  sitePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 58,
  },
})

export default ProductDetailScreen
