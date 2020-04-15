// attempt at a fake api
import landingPage from './landingPage.json'

class Api {
    constructor () {
        const api = {
            baseUrl: '/api'
        }

        this.api = api
    }

    get (route, page) {
        return this.api({
        })
    }
}

export default {
    getLandingPage () {
        return landingPage
    }
}