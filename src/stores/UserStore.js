import {makeObservable, observable, action} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserStore {
  userId = '';

  constructor() {
    makeObservable(this, {userId: observable.ref, setUserId: action});
  }

  setUserId(userId) {
    this.userId = userId;
  }
}

export default new UserStore();
