import configs from './configs';
import fetchWrapper from './fetchWrapper';

class BackendApi {
  async loginOrRegisterUser(phoneNumber) {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phoneNumber}),
      };
      //   const url = `${configs.backendUrl}/user/login-or-register`;
      const url = 'http://localhost:3001/user/login-or-register';
      const res = await fetchWrapper(url, options);
      const data = await res.json();
      console.log(`login data : ${JSON.stringify(data)}`);
      return data;
    } catch (err) {
      console.log('err is', err);
      throw err;
    }
  }
}

export default new BackendApi();
