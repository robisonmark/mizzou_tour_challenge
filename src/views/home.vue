<template>
  <div class="home">
    <header>
      <h1>2020 Regional Tourism Meetings</h1>
    </header>
    <main>
      <div class="hero hero-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
          amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
          Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac
          porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut
          nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>

        <p>
          Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo
          tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci. Aenean
          eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue
          accumsan tincidunt.
        </p>

        <a href="" class="hero--cta__link">See Agenda ></a>
      </div>

      <div class="who">
        <h2>Who Should Attend</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
          amet tempor nibh finibus et.
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Maecenas varius tortor nibh, sit amet</li>
          <li>Tempor nibh finibus et.</li>
          <li>Mauris malesuada nisi sit amet augue accumsan tincidunt.</li>
        </ul>
      </div>

      <div class="when">
        <h2>When And Where</h2>
        <p>
          Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit
          amet augue accumsan tincidunt. Aenean eu enim justo. Vestibulum aliquam hendrerit
          molestie.
        </p>

        <!-- <div class="img--con"> -->
        <img
          src="../images/road-show-logo.png"
          class="road-show-logo"
          alt="Missouri Road Show Logo"
        />
        <!-- </div> -->

        <p class="semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
          amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam
        </p>
      </div>

      <div class="where">
        <div class="event">
          <h4 class="event--date">March 13, 2020</h4>
          <div class="event--card">
            <div class="event--map">
              <div class="event--day">
                <!-- <div class="event--day__month">Mar</div>  -->
                <!-- <div class="event--day__day">13</div> -->
                Mar
                <div class="event--day__day">13</div>
              </div>
            </div>

            <div class="event--card__bottom">
              <div class="event--register">
                <div class="region">Central Missouri</div>
                <div class="locationName">Lake of the Ozarks</div>
                <div class="time">8:00 a.m.</div>

                <a class="btn" href="btn">Register</a>
              </div>

              <div class="event--address">
                <div class="event--address__name">Inn at Grand Glaize</div>

                <div class="address">
                  <div class="address-lineOne">5142 Osage Beach Pkwy</div>
                  <div class="address-lineTwo">Osage Beach, MO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
