import { shallowMount } from '@vue/test-utils'
import home from '@/views/home.vue'

describe('home.vue', () => {
  const $route = {
    path: '/',
    hash: '#events'
  }

  const mountFunction = options => {
    return shallowMount(home, {
      ...options,
      stubs: ['router-link'],
      mocks: {
        $route
      }
    })
  }

  it('Should be able to init events', () => {
    const initEvents = jest.fn()
    mountFunction({
      methods: {
        initEvents
      }
    })

    expect(initEvents).toHaveBeenCalled()
  })

  it('Should be able to init page data', () => {
    const initPage = jest.fn()
    mountFunction({
      methods: {
        initPage
      }
    })

    expect(initPage).toHaveBeenCalled()
  })
})
