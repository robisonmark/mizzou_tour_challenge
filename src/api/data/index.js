import homeJson from './home.json'
import events from './events.json'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  getPage (page) {
    return fetch(homeJson, 400)
  },

  getEventsList () {
    return fetch(events, 400)
  },

  getEvent (slug) {
    let event = events.data.filter(event => {
      return event.eventSlug === slug
    })

    event = {
      data: event[0]
    }

    return fetch(event, 400)
  }
}
