import {makeObservable, observable, action} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStore {
  token = ''
  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
    })
  }

  setToken(token) {
    this.token = token
  }

  async loadToken() {
    if (this?.token === '') {
      const userToken = await AsyncStorage.getItem('@authToken')
      if (userToken) {
        this.setToken(userToken)

        return userToken
      }
    }
    return this.token
  }
}

export default new AuthStore()
