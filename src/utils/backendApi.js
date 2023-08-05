import fetchWrapper from './fetchWrapper'

const backendUrl = 'http://3.141.39.165:3001'

class BackendApi {
  async loginOrRegisterUser(phoneNumber) {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phoneNumber}),
      }
      const url = `${backendUrl}/user/login-or-register`
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
      const url = `${backendUrl}/user/search`

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
      const url = `${backendUrl}/user/catalog`
      const res = await fetchWrapper(url, options)
      const data = await res.json()
      console.log(`catalog data : ${JSON.stringify(data)}`)
      return data
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async logEvent(eventType, eventData) {
    if (!eventType) {
      return
    }
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({eventType, eventData}),
      }
      const url = `${backendUrl}/data/log-event`
      await fetchWrapper(url, options)
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default new BackendApi()
