<template>
  <router-view/>
</template>

<style lang="scss">
  #app {
  background-color: $background-gray;
  padding: 2rem 1rem;
  @media (min-width: 600px) {
    background-color: $white;
    padding: 3rem 4rem;
    max-width: 1360px;
    margin: auto;
  }
}
</style>
