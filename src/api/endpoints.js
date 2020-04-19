// import axios from 'axios'
import client from 'api-client'

class Api {
  constructor () {
    const api = client

    this.api = api
  }

  handleSuccess (response) {
    return response
  }

  getPage (page) {
    return this.api.getPage()
  }

  getEventsList () {
    return this.api.getEventsList()
  }

  getEvent (slug) {
    return this.api.getEvent(slug)
  }
}

export default new Api()
