import React, {useEffect, useRef, useState} from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backendApi from '../utils/backendApi';

// 해당 스크린에서 남은 과제 - 실제 인증코드 구현하기
const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showVerificationButton, setShowVerificationButton] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const navigation = useNavigation();
  const textInputRef = useRef();
  const animatedValue = new Animated.Value(0);

  const handleLogin = async () => {
    if (phoneNumber.slice(0, 3) === '010' && phoneNumber?.length === 11) {
      const result = await backendApi.loginOrRegisterUser(phoneNumber);
      if (result?.status === 200 && result?.data) {
        navigation.navigate('HomeScreen');
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
      ]).start();

      Vibration.vibrate(100);
    }
  };

  useEffect(() => {
    if (phoneNumber?.length === 11) {
      setShowVerificationButton(true);
    } else {
      setShowVerificationButton(false);
    }
  }, [phoneNumber]);

  useEffect(
    () => {
      // if (needsFocus) {
      textInputRef.current?.focus();
      // }
    },
    [
      // needsFocus
    ],
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.header}>
          {phoneNumber?.length !== 11
            ? '로그인/회원가입을 위해\n휴대폰 번호를 입력해 주세요'
            : '고객님의 번호가 맞나요?'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="휴대폰 번호 입력"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
          maxLength={11}
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
  );
};

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
});

export default LoginScreen;
