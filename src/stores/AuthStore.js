import {makeObservable, observable, action} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStore {
  token = '';
  constructor() {
    makeObservable(this, {
      token: observable,
      setIsToken: action,
    });
  }

  setIsToken(token) {
    this.token = token;
  }
}

export default new AuthStore();
