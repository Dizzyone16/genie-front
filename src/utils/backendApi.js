import configs from './configs'
import fetchWrapper from './fetchWrapper'

class BackendApi {
  async loginOrRegisterUser(phoneNumber) {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phoneNumber}),
      }
      const url = `${configs.backendUrl}/user/login-or-register`
      const res = await fetchWrapper(url, options)
      const data = await res.json()
      console.log(`login data : ${JSON.stringify(data)}`)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async getSearchResults(query) {
    if (!query) {
      return
    }
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query}),
      }
      const url = `${configs.backendUrl}/user/search`

      const res = await fetchWrapper(url, options)
      const data = await res.json()
      console.log(`search data : ${JSON.stringify(data)}`)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async getProductDetailData(catalogNumber) {
    if (!catalogNumber) {
      return
    }
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({catalogNumber}),
      }
      const url = `${configs.backendUrl}/user/catalog`
      const res = await fetchWrapper(url, options)
      const data = await res.json()
      console.log(`catalog data : ${JSON.stringify(data)}`)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default new BackendApi()
