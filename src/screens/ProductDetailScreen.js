import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ImageUtil from '../utils/ImageUtil';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RatingInfo from '../components/RatingInfo';
import commaNumber from 'comma-number';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

const ImageUriExample = require('../images/imageUriExample.jpg');
const ArrowForward = require('../images/ArrowForward.png');

const Divider = () => <View style={{height: 18, backgroundColor: '#F5F5F5'}} />;

const ProductDetailScreen = ({route}) => {
  const {productUrl} = route?.params;
  const dims = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const screenWidth = dims.width;
  const [productDetailData, setProductDetailData] = useState({
    id: 1,
    title: '삼다수 2L 6개',
    lowestPrice: 99000,
    originalPrice: 180000,
    imageUri:
      'https://shopping-phinf.pstatic.net/main_2796542/27965424524.20210712124450.jpg?type=f640',
    ratingScore: 4.5,
    ratingCount: 250,
    sellerCount: 50,
    lowestPriceMallUrl: 'https://www.naver.com',
    mall_list: [
      {
        sellerName: 'AK몰',
        price: 8800,
        mall_url:
          'https://cr.shopping.naver.com/adcr.nhn?x=6br99gUDuXyZCDEaLjYmF%2F%2F%2F%2Fw%3D%3Dst8pO%2FlppuOdBOF3D37S%2B1FP8JPgirmr3gf%2FEZSsnMcrIrdnZiJ8DfkOBaS4xThFNJ%2Bkw6lqqoNz43ytxo3mLWv%2B5DMe0V4eHtKmx4zvOi97Bundf0XVi4apjyuxzG8n1r2pWOco7b%2FBbyozHVOYBaE%2Fl07jbkk2JWlqHyJQJSVLueZxX%2F4i9pSrX%2Fph8DY1Gh6lJTzRK9myM6GQGa4Uh%2Fzs6AmBCfeQt%2BnjbENyQDd5E7Li254QQsCUZF546Sl0NX01bDHSymIs2oeBNKJfjqGHRT0VRHrv43i9m3Y%2FB2SD%2BDorfbtXynSqQmEWvwW670hKzzhEpGx%2BEED6gDkK84p0LgzXcHNG5s6BwAlirF7mUPvY8JQhH86ysSh1tcnSmkIopM7sP5MItmZg%2FOTAoOTwx17RlFp6wXt9yiitXHypWM76hV6JACbn8IOG9wqUq%2BJiUfwoRPzuLAEmGrrQDL0AkyGCQdKQv0dmmngK1j6lF2Gu9wdhVi9TEX5%2FdR2X1rXELnZ4Co%2FOu5q2acTrNRf%2Br438G%2Fm0vlp9xXt8XzUtafIP8Bs58PHvDst7A77aj75i1i%2BySMr8MwMsjXCV9p7UGSghtBWF%2FwQpzshmcV29l3KZiMO%2BVwptFQtJOd07IjVpCnFN%2FX7WozUgbQHkfML50nuaDe9%2FZrcZR0WAt3Lg%3D&nvMid=35632129074&catId=50002032',
      },
      {
        sellerName: '티몬',
        price: 9210,
        mall_url:
          'https://cr.shopping.naver.com/adcr.nhn?x=MdO92c6JhlxogI3v9xmMOP%2F%2F%2Fw%3D%3Dsj9pFH8FzD3q5WHtUkTM6Rs%2BfBWddV1YzugbJPV2gqutavnIyR15O0luajGubl%2BHVCZTJSJQxySGchex%2BNZVu6ZNvbs%2Fz%2BYVJKXYHKWVgO0MXYCDTnVyfgV%2B3yO%2F%2Fz5PemwS5drxvFjpwVGIdTPTRd4ZWqxTiBkXIc4tLxQ5seahn92i9HKW9JRoCimBGU%2B5%2BSDKNBH7yov9bil5PQrfBx7Uh%2Bnln9CFNjQcS%2FuQwA3dTTlB2WF%2F7pJlUHJ3T53p9l5qB5UfXwnB70JAuzSeq5PGxBn4gbxZwkjuUcASmEEvRl88dfX3Y39MjF3nRIcIK0WGgkko%2FhXRE2RXRg23%2BSbeh3qDN7tmHTnridek8JmVgxEjUVfcGQChGFBJYaUUnaa85SBfEq8Mdz5olFkD%2FlgwL7id4vsJRH5qmGxyVqAqrlCCYSQ%2B9mxZX4ot8gpOlfkPyyiHBW09YDC%2Ft9Jw2p%2B%2FQqWHnvMk4gj2XH59eMnRF2Gu9wdhVi9TEX5%2FdR2X1s1qWROs0egBZ23PblgcBAUbLfvI43kQcUsIIGKsdjM571KZLHlFVNwVmBhCbzNztPn%2ByxE38oL5EJotDYJdKv4C1r7JDpVrZUeQlApHPpWVdlgV0wFdGtSq39FQqoe1axknPWzGzXxzXiw7wpPFx3AHXQjqy64KOTqbSzX0gHQVk%2FiI07N3baFnV07eE03Ti&nvMid=38175447733&catId=50002032',
      },
      {
        sellerName: '초저가몰열린마당',
        price: 9450,
        mall_url:
          'https://cr.shopping.naver.com/adcr.nhn?x=PygN%2FsRWFRXILqDI8Zzmh%2F%2F%2F%2Fw%3D%3DsLIeXb2p7DrqFKLjazLPoZykB7QQTDDgFcdJcC%2BAyF2OQ1yhIwmU%2FR5vtKgGuxybmHkbbA2dJPUXXaacN4IdMGXsXvZeMM4VK0%2BwjYJm0IunYsfDmngMDc30arSUbghlwmURP2fveHjVrDPzhEH2UG9NkBcQAF0rBVKLZLzjQRFoz32CbmtCd3OlTW5CtSpH%2BRL6iu0rN9ANYEXkZX8p%2BoSEm%2FeWMmjv1VUimPr%2BbdY5AhQk4OliRYO5HzwtqRSP2Z%2FkdIpe1%2B%2B8mcclWtAkKW0Pg%2F6PYJW9LpCSumzPJoig1fMrYBnjpptE6kfxO8QfJAoPecY1hc74oVjtEiYPoRuV1q4G6pWFQl0T8FrVe3OmZtvVA8IL76%2BhMMNJgmNfTQ3%2B3Snk%2FwN8cg%2FVQ4kCr%2F5hg4R0dtjJ5h2Sc9SXpxZ3%2BqNTnBfemYJehh5xLgXy3mFUrNgSJYunjeN4wRZQ55jUztxHUk6rlkzULjUA4ma4IkUEVLdtbEpcGtHTY0KU3P%2F%2FTwAamA8ltl2CAuVy9u6E4cvdBMIpMRYqeIDvBgt5eLTlz1s47Lk%2Bcd%2FBxscU37F2ODB%2FPHR5UQu8uNWyZ19%2Fdm3aTNH8mh91vv7XgNIKGZj9NJXgr3Lyiu8nj%2Btgwp3buYLKnSspmFHf6HAqucw%3D%3D&nvMid=86022094172&catId=50002032',
      },
    ],
  });

  // useEffect(async () => {
  //   const result = await backendApis?.getProductDetailData(productUrl)
  //   if (result?.status === 200) {
  //     setProductDetailData(result?.data)
  //   }
  // }, [])

  return (
    <>
      <StatusBar style={{backgroundColor: 'white'}} />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingBottom:
            insets.bottom > 30 ? insets?.bottom - 12 : insets?.bottom,
        }}>
        <Header />

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
            <ImageUtil source={ImageUriExample} size={screenWidth} />
          </View>

          {/* 상품 정보 */}
          <View
            style={{paddingHorizontal: 25, paddingTop: 30, marginBottom: 52}}>
            {/* 타이틀 */}
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
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
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 20, color: '#EA3323'}}>최저가 </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#EA3323',
                      fontWeight: 'bold',
                    }}>
                    {commaNumber(productDetailData?.lowestPrice)}
                  </Text>
                  <Text style={{fontSize: 20, color: '#EA3323'}}>원 </Text>
                </View>
                <View style={{marginTop: 8}}>
                  <Text
                    style={{fontSize: 16, textDecorationLine: 'line-through'}}>
                    {commaNumber(productDetailData?.originalPrice)}원
                  </Text>
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
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                판매처
              </Text>
            </View>
            {productDetailData?.mall_list?.map((mall, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 60,
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
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* Bottom Order Bar */}
        <BlurView
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 58,
          }}
          blurType="light" // Change blurType as desired (e.g., "light", "dark", "extraLight", etc.)
          blurAmount={100} // Adjust the blur amount as needed
          reducedTransparencyFallbackColor="white"
        />
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
                  url: productDetailData?.mall_list[0].mall_url,
                });
              }}>
              <Text style={{color: 'white', fontSize: 18}}>구매하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

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
});

export default ProductDetailScreen;
