import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import WebView from 'react-native-webview'

// components
import Header from '../components/Header'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const ProductWebViewScreen = ({route}) => {
  const exampleURL =
    'https://cr.shopping.naver.com/adcr.nhn?x=6br99gUDuXyZCDEaLjYmF%2F%2F%2F%2Fw%3D%3Dst8pO%2FlppuOdBOF3D37S%2B1FP8JPgirmr3gf%2FEZSsnMcrIrdnZiJ8DfkOBaS4xThFNJ%2Bkw6lqqoNz43ytxo3mLWv%2B5DMe0V4eHtKmx4zvOi97Bundf0XVi4apjyuxzG8n1r2pWOco7b%2FBbyozHVOYBaE%2Fl07jbkk2JWlqHyJQJSVLueZxX%2F4i9pSrX%2Fph8DY1Gh6lJTzRK9myM6GQGa4Uh%2Fzs6AmBCfeQt%2BnjbENyQDd5E7Li254QQsCUZF546Sl0NX01bDHSymIs2oeBNKJfjqGHRT0VRHrv43i9m3Y%2FB2SD%2BDorfbtXynSqQmEWvwW670hKzzhEpGx%2BEED6gDkK84p0LgzXcHNG5s6BwAlirF7mUPvY8JQhH86ysSh1tcnSmkIopM7sP5MItmZg%2FOTAoOTwx17RlFp6wXt9yiitXHypWM76hV6JACbn8IOG9wqUq%2BJiUfwoRPzuLAEmGrrQDL0AkyGCQdKQv0dmmngK1j6lF2Gu9wdhVi9TEX5%2FdR2X1rXELnZ4Co%2FOu5q2acTrNRf%2Br438G%2Fm0vlp9xXt8XzUtafIP8Bs58PHvDst7A77aj75i1i%2BySMr8MwMsjXCV9p7UGSghtBWF%2FwQpzshmcV29l3KZiMO%2BVwptFQtJOd07IjVpCnFN%2FX7WozUgbQHkfML50nuaDe9%2FZrcZR0WAt3Lg%3D&nvMid=35632129074&catId=50002032'
  const {url} = route?.params
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      {/* 나중에는 route에서 받는 url로 변경할 것 */}
      <WebView
        style={{flex: 1, marginTop: insets.top}}
        source={{uri: exampleURL}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default ProductWebViewScreen
