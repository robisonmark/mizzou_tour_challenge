<template>
  <div class="page-home">
    <header>
      <h1>{{page.pageTitle}}</h1>
    </header>
    <main>
      <div class="hero hero-content">
        <template v-for="(item, index) in page.pageHero.content">
          <template v-if="item.type === 'p'">
            <p v-html="item.content" :key="index"></p>
          </template>
        </template>

        <a :href="page.pageHero.cta.link" class="hero--cta__link" @click.prevent="smoothScroll(page.pageHero.cta.link)">{{page.pageHero.cta.text}}  <font-awesome-icon v-if="page.pageHero.cta.icon" :icon="['fas', page.pageHero.cta.icon]"></font-awesome-icon></a>
      </div>

      <template v-if="page.contentBlocks.length >= 1">
        <div v-for="(section, index) in page.contentBlocks" :key="index">
          <template v-if="section.type === 'header'">
            <h2 v-html="section.content" :class="[section.modifier ? section.modifier : '']"></h2>
          </template>

          <template v-else-if="section.type === 'p'">
            <p v-html="section.content" :class="[section.modifier ? section.modifier : '']"></p>
          </template>

          <template v-else-if="section.type === 'list'">
            <ul>
              <li v-for="(item, key) in section.content" :key="key" :class="[section.modifier ? section.modifier : '']">
                {{item}}
              </li>
            </ul>
          </template>

          <template v-else-if="section.type === 'img'">
            <img :src="publicPath + section.content" :class="[section.modifier ? section.modifier : '']" :alt="section.alt" />
          </template>

        </div>
      </template>

      <div class="where" id="events">
        <template v-if="events.length >= 1">
          <div class="event" v-for="event in events" :key="event.slug">
            <h4 class="event--date">{{event.eventDate}}</h4>
            <div class="event--card">
              <div class="event--map" :style="{ 'background-image': 'url(' + event.location.mapLink + ')' }">
                <div class="event--day">
                  {{splitDateAbbr(event.eventDateAbbr)[0]}}
                  <div class="event--day__day">{{splitDateAbbr(event.eventDateAbbr)[1]}}</div>
                </div>
              </div>

              <div class="event--card__bottom">
                <div class="event--register">
                  <div class="region">{{event.eventRegion}}</div>
                  <div class="eventName">{{event.eventName}}</div>
                  <div class="time">{{event.eventDate}}</div>

                  <router-link class="btn" :to="{ name: 'register', params: { eventSlug: event.eventSlug } }">Register</router-link>
                </div>

                <div class="event--address">
                  <div class="event--address__name">{{event.location.locationName}}</div>

                  <div class="address">
                    <div class="address-lineOne">{{event.location.address1}}</div>
                    <div class="address-lineOne">{{event.location.address2}}</div>
                    <div class="address-lineTwo">{{event.location.city}}, {{event.location.state}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>

<script>
import Api from '@/api/endpoints.js'

export default {
  name: 'home',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      page: {
        pageTitle: '',
        pageHero: {
          content: [],
          cta: {
            link: '',
            text: '',
            icon: ''
          }
        },
        contentBlocks: []
      },
      events: []
    }
  },
  computed: {
  },
  created () {
    this.initEvents()
    this.initPage()
  },
  updated () {
    this.$nextTick(() => {
      if (Object.prototype.hasOwnProperty.call(this.$route, 'hash')) {
        if (this.$route.hash !== '') {
          var elmnt = document.querySelector(this.$route.hash)
          elmnt.scrollIntoView()
        }
      }
      // window.scrollTo(this.$route.hash)
    })
  },
  methods: {
    initEvents () {
      Api.getEventsList().then(response => {
        this.events = response.data
      })
    },
    initPage () {
      Api.getPage().then(response => {
        this.page = response.data
      })
    },
    smoothScroll (hash) {
      history.pushState(null, null, '/#events')
      window.setTimeout(() => {
        const elmnt = document.querySelector(hash).getBoundingClientRect().top
        let scrollPos = 0
        function smoothScroll () {
          if (scrollPos >= (elmnt - 25)) {
            window.clearInterval(scroll)
          } else {
            scrollPos = window.pageYOffset + 25
          }

          window.scrollTo(0, scrollPos)
        }
        const scroll = window.setInterval(smoothScroll, 10)
      }, 10)
    },
    splitDateAbbr (date) {
      return date.split(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-home {
    scroll-behavior: smooth;
  }
  .event {
    margin-top: 2rem;
    margin-bottom: 4rem;
    border-top: 4px $accent-green solid;
    h4 {
      margin: 1rem 0;
    }

    &--card {
      background-color: $white;
      display: flex;
      flex-direction: column;
      @media (min-width: 600px) {
        flex-direction: row;
      }

      &__bottom {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        @media (min-width: 600px) {
          flex-direction: row;
          padding-top: 0;
          padding-right: 0;
          padding-bottom: 0;
          justify-content: space-between;
          flex-grow: 1;
        }
      }
    }

    &--map {
      background-image: url('../images/map.png');
      background-position: center center;
      background-size: cover;
      height: 10rem;
      width: 100%;
      @media (min-width: 600px) {
        max-width: 12.2rem;
        height: 10.8rem;
      }
    }

    &--day {
      background-color: $accent-blue;
      color: $white;
      @include bold;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      width: 4.33rem;
      height: 4.33rem;
      &__day {
        font-size: 2.3rem;
        line-height: 1;
      }
    }

    &--register {
      @media (min-width: 600px) {
        padding: 1rem;
      }

      .region {
        @include medium;
        line-height: 1;
      }
      .eventName {
        @include bold;
        line-height: 1;
        font-size: 1.33rem;
      }
      .time {
        @include light;
        padding: .8rem 0;
      }
    }

    &--address {
      font-size: 1rem;

      @media (min-width: 600px) {
        font-size: .8rem;
        background-color: $address-back;
        padding: 1rem;
        max-width: 11rem;
        width: 100%;
      }
      &__name {
        @include medium;
        padding: 2rem 0 1rem;

        @media (min-width: 600px) {
          padding: 0;
          margin-bottom: 1rem;
        }
      }
      .address {
        @include light;
        line-height: 1.3;
      }
    }
  }
</style>
