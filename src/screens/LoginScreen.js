import React, {useEffect, useRef, useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Vibration,
  StatusBar,
  Alert,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//utils
import backendApi from '../utils/backendApi'

// stores
import AuthStore from '../stores/AuthStore'
import UserStore from '../stores/UserStore'

// 해당 스크린에서 남은 과제 - 실제 인증코드 구현하기
const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showVerificationButton, setShowVerificationButton] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')

  const navigation = useNavigation()
  const animatedValue = new Animated.Value(0)

  const handleLogin = async () => {
    if (phoneNumber.slice(0, 3) === '010' && phoneNumber?.length === 11) {
      const result = await backendApi.loginOrRegisterUser(phoneNumber)

      if (result?.token && result?.userId) {
        AuthStore?.setToken(result?.token)
        AsyncStorage.setItem('@authToken', result?.token)
        await UserStore?.setUserId(result?.userId)

        navigation.navigate('HomeScreen')
        backendApi.logEvent('login')
      } else {
        Alert.alert(
          '',
          '로그인에 실패했어요. 계속 진행이 안될 시 고객센터로 문의주세요.',
          [{text: '확인'}],
        )
      }
    } else {
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start()

      Vibration.vibrate(10)
    }
  }

  useEffect(() => {
    if (phoneNumber?.length === 11) {
      setShowVerificationButton(true)
    } else {
      setShowVerificationButton(false)
    }
  }, [phoneNumber])

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <View style={styles.container}>
        <Text style={styles.header}>
          {phoneNumber.slice(0, 3) === '010' && phoneNumber?.length === 11
            ? '고객님의 번호가 맞나요?'
            : '로그인/회원가입을 위해\n휴대폰 번호를 입력해 주세요'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='휴대폰 번호 입력'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType='numeric'
          maxLength={11}
          autoFocus={true}
        />
        <View style={styles.bottomBar}>
          <Animated.View
            style={[{flex: 1}, {transform: [{translateX: animatedValue}]}]}>
            <TouchableOpacity
              activeOpacity={showVerificationButton ? 0.85 : 0.7}
              style={[
                styles.button,
                !showVerificationButton && styles.disabledButton,
              ]}
              onPress={handleLogin}>
              <Text style={styles.buttonText}>본인 인증하기</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  bottomBar: {
    position: 'absolute',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    height: 58,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 70,
    color: 'black',
  },
  input: {
    width: '100%',
    borderColor: '#4880EE',
    borderBottomWidth: 2,
    fontSize: 24,
    marginTop: 72,
    marginBottom: 20,
  },
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4880EE',
    borderRadius: 16,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {color: 'white', fontSize: 18},
})

export default LoginScreen
