class Router {
  constructor () {
    this.routes = []
  }

  get (uri, callback) {
    if (!uri || !callback) throw new Error('uri or callback must be given')

    if (typeof uri !== 'string') throw new TypeError('typeof uri must be a string')
    if (typeof callback !== 'function') throw new TypeError('typeof callback must be a function')

    this.routes.forEach(route => {
      if (route.uri === uri) throw new Error(`the uri ${route.uri} already exists`)
    })

    const route = {
      uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
      callback
    }
    this.routes.push(route)
  }

  init () {
    this.routes.some(route => {
      const regEx = new RegExp(`^${route.uri}$`)
      const path = window.location.pathname

      if (path.match(regEx)) {
        const req = { path }
        return route.callback.call(this, req)
      }
    })
  }
}
