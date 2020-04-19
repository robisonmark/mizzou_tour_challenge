import { shallowMount } from '@vue/test-utils'
import registration from '@/views/registration.vue'

describe('home.vue', () => {
  const $route = {
    path: '/registration',
    params: {
      eventSlug: 'test_slug'
    }
  }

  const mountFunction = options => {
    return shallowMount(registration, {
      ...options,
      stubs: ['router-link'],
      mocks: {
        $route
      }
    })
  }

  it('Should be able to init event', () => {
    const initEvent = jest.fn()
    mountFunction({
      methods: {
        initEvent
      }
    })

    expect(initEvent).toHaveBeenCalled()
  })

  it('Should be able to submit registration', async () => {
    const submitRegistration = jest.fn()
    const wrapper = mountFunction({
      methods: {
        submitRegistration
      }
    })

    wrapper.find('#submitRegistration').trigger('click')

    await wrapper.vm.$nextTick()

    expect(submitRegistration).toHaveBeenCalled()
  })

  it('Should be able to validate', async () => {
    const wrapper = mountFunction({
      data () {
        return {
          register: {
            first_name: '',
            email: '',
            title: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            payment: ''
          }
        }
      }
    })

    expect(wrapper.vm.validate()).toBeFalsy()
  })

  it('Should be able to go back to all events', async () => {
    const wrapper = mountFunction()

    expect(wrapper.find('#return')).toBeTruthy()
  })
})
