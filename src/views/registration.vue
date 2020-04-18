<template>
  <div id="app" class="page-registration">
    <header>
      <h1>Road Show Registration</h1>
    </header>
    <main>
      <div class="hero hero--event container">
        <h2>Central Missouri Road Show</h2>
        <div class="row">
          <div class="col">

            <div class="hero--event__info">
              <div><strong>March 13, 2020</strong></div>
              <div><strong>Lake of the Ozarks</strong></div>
              <div class="light">8:00 a.m.</div>
              <div class="light">Inn at Grand Glaize</div>
            </div>

            <div class="cost">
              <strong>Registration</strong>
              <p>$20</p>
            </div>

            <a href="/" class="return">Back to all meetings</a>
          </div>

          <div class="col">
            <img src="../images/road-show-logo.png" class="road-show-logo" alt="Missouri Road Show Logo" />
          </div>
        </div>
      </div>

      <form name="registration-form" action="submitRegistration">
        <div class="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor
        </div>

        <div class="required"><strong>*Required Field</strong></div>

        <h2>Attendee Information</h2>

        <fieldset>
          <legend>Personal Information</legend>

          <div class="form-group floatLabel--wrap">
            <input id="given-name" type="text" class="floatLabel--input" placeholder="First Name*" required />
            <label for="given-name" class="floating-label">First Name*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="email" type="email" placeholder="Email*" class="floatLabel--input" required />
            <label for="email" class="floating-label">Email*</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Company Information</legend>
          <div class="form-group floatLabel--wrap">
            <input id="title" type="text" class="floatLabel--input" placeholder="Title*" required />
            <label for="title" class="floating-label">Title*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="company" type="text" class="floatLabel--input" placeholder="Company*" required />
            <label for="company" class="floating-label">Company*</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>

          <div class="form-group floatLabel--wrap">
            <input id="address1" type="text" class="floatLabel--input" placeholder="Address Line 1*" required />
            <label for="address1" class="floating-label">Address Line 1*</label>
          </div>

          <div class="form-group floatLabel--wrap">
            <input id="address2" type="text" class="floatLabel--input" placeholder="Address Line 2*" required />
            <label for="address2" class="floating-label">Address Line 2</label>
          </div>
          <div class="form-row">
            <div class="form-group col col-sm-6">
              <div class="floatLabel--wrap">
                <input id="city" type="text" class="floatLabel--input" placeholder="City*" required />
                <label for="city" class="floating-label">City*</label>
              </div>
            </div>
            <div class="form-group col col-sm-3">
              <div class="floatLabel--wrap">
                <select id="state" class="select floatLabel--input">
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
                <input id="zip" type="number" pattern="(\d{5}([\-]\d{4})?)" class="floatLabel--input" placeholder="Zip*"
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
            <input id="creditcard" type="radio" name="payment" />
            <label for="creditcard">Credit Card</label>
          </div>
          <div class="paymentGroup">
            <input id="invoice" type="radio" name="payment" />
            <label for="invoice">Invoice</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Submit</legend>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>
