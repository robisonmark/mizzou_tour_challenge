<template>
  <div class="page-registration">
    <header>
      <h1>Road Show Registration</h1>
    </header>
    <main>
      <div class="hero hero--event container">
        <h2>{{event.eventRegion}} Road Show</h2>
        <div class="row">
          <div class="col">

            <div class="hero--event__info">
              <div><strong>{{event.eventDate}}</strong></div>
              <div><strong>{{event.eventName}}</strong></div>
              <div class="light">{{event.eventTime}}</div>
              <div class="light">{{event.location.locationName}}</div>
            </div>

            <div class="cost">
              <strong>Registration</strong>
              <p>$20</p>
            </div>

            <router-link id="return" :to="{ name: 'home', hash: '#events' }" class="return">Back to all meetings</router-link>
          </div>

          <div class="col">
            <img src="../images/road-show-logo.png" class="road-show-logo" alt="Missouri Road Show Logo" />
          </div>
        </div>
      </div>

      <form name="registration-form" @submit.prevent.stop>
        <div class="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor
        </div>

        <div class="required"><strong>*Required Field</strong></div>

        <h2>Attendee Information</h2>

        <div class="alert" v-if="showAlert">
          The following fields are required: <font-awesome-icon :icon="['fas', 'times']" class="close" @click.prevent.stop="showAlert = false"></font-awesome-icon>
          <div class="errorItem" v-for="(error, key) in errors" :key="key">
            {{error.replace(/_/g, ' ')}}
          </div>
        </div>

        <fieldset>
          <legend>Personal Information</legend>

          <div class="form-group floatLabel--wrap">
            <input id="given-name" v-model="register.first_name" type="text" class="floatLabel--input" placeholder="First Name*" required />
            <label for="given-name" class="floating-label">First Name*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="email" v-model="register.email" type="email" placeholder="Email*" class="floatLabel--input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            <label for="email" class="floating-label">Email Address*</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Company Information</legend>
          <div class="form-group floatLabel--wrap">
            <input id="title" v-model="register.title" type="text" class="floatLabel--input" placeholder="Title*" required />
            <label for="title" class="floating-label">Title*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="company" v-model="register.company" type="text" class="floatLabel--input" placeholder="Company*" required />
            <label for="company" class="floating-label">Company*</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>

          <div class="form-group floatLabel--wrap">
            <input id="address1" v-model="register.address1" type="text" class="floatLabel--input" placeholder="Address Line 1*" required />
            <label for="address1" class="floating-label">Address Line 1*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="address2" v-model="register.address2" type="text" class="floatLabel--input" placeholder="Address Line 2*" />
            <label for="address2" class="floating-label">Address Line 2</label>
          </div>
          <div class="form-row">
            <div class="form-group col col-sm-6">
              <div class="floatLabel--wrap">
                <input id="city" v-model="register.city" type="text" class="floatLabel--input" placeholder="City*" required />
                <label for="city" class="floating-label">City*</label>
              </div>
            </div>
            <div class="form-group col col-sm-3">
              <div class="floatLabel--wrap">
                <select id="state" v-model="register.state" class="select floatLabel--input" :class="[register.state !== '' ? 'filled' : '']">
                  <option value=""></option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <label for="state" class="floating-label">State*</label>
              </div>
            </div>
            <div class="form-group col col-sm-3">
              <div class="floatLabel--wrap">
                <input id="zip" v-model="register.zip" type="number" pattern="(\d{5}([\-]\d{4})?)" class="floatLabel--input" placeholder="Zip*"
                  required />
                <label for="zip" class="floating-label">Zip*</label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset class="payment">
          <legend>Payment Method</legend>

          <label><strong>Payment Method*</strong></label>

          <div class="disclaimer">Credit card purchases will be directed to an external site to complete checkout.
            Attendees paying by check will be emailed an invoice and payment will be required prior to attendance. For
            questions or assistance, please contact <a href="mailto: tourism@ded.mo.gov">tourism@ded.mo.gov</a> or call
            <a href="tel: 573-751-4133">573-751-4133</a>.</div>

          <div class="paymentGroup">
            <input id="creditcard" v-model="register.payment" type="radio" value="cc" name="payment" />
            <label for="creditcard">Credit Card</label>
          </div>
          <div class="paymentGroup">
            <input id="invoice" v-model="register.payment" type="radio" value="invoice" name="payment" />
            <label for="invoice">Invoice</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Submit</legend>

          <button id="submitRegistration" type="submit" @click="submitRegistration()">Submit</button>
        </fieldset>
      </form>
    </main>

    <modal v-if="showModal">
      <div slot="header">
        We Look Forward to Seeing You
      </div>

      <div slot="body">
        <div v-if="register.payment === 'cc'">
          <p>Thank you for registering to join us on {{event.eventDate}}.</p>
          <p>In {{countdown}}s you will be taken to you another page to enter your payment information.</p>
        </div>
        <div v-else>
          Thank you for registering. We will see you on {{event.eventDate}}.
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Api from '@/api/endpoints.js'
import modal from '@/components/modal'

export default {
  name: 'register',
  data () {
    return {
      countdown: 10,
      errors: [],
      event: {
        eventSlug: '',
        eventName: '',
        eventTime: '',
        eventDate: '',
        eventDateAbbr: '',
        eventRegion: '',
        location: {
          locationName: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          mapLink: 'a'
        }
      },
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
      },
      showAlert: false,
      showModal: false
    }
  },
  components: {
    modal
  },
  created () {
    this.initEvent()

    this.$on('close', () => {
      this.showModal = false
    })
  },
  methods: {
    countDownTimer () {
      if (this.countdown > 0) {
        setTimeout(() => {
          this.countdown -= 1
          this.countDownTimer()
        }, 1000)
      } else {
        window.open('https://www.visitmo.com/')
        this.showModal = false
        this.countdown = 10
      }
    },
    initEvent () {
      Api.getEvent(this.$route.params.eventSlug).then(response => {
        this.event = response.data
      })
    },
    submitRegistration () {
      if (this.validate()) {
        this.showModal = true
        this.countDownTimer()
      } else {
        this.showAlert = true
      }
    },
    validate () {
      this.errors.length = 0
      let returnValue = true

      const fields = Object.keys(this.register)

      fields.forEach(field => {
        if (this.register[field] === '') {
          if (field !== 'address2') {
            this.errors.push(field)
            returnValue = false
          }
        }
      })
      return returnValue
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  width: 100%;
  border-radius: 4px;
  z-index: 2;
  padding: 2rem 1rem;
  color: rgb(255, 82, 82);
  background-color: rgba(255, 82, 82, .22);
  position: relative;
  .close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .errorItem {
    margin-left: 2rem;
    line-height: 1.3;
    text-transform: capitalize;
  }
}
</style>
