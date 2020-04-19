<template>
  <router-view class="content" />
</template>

<style lang="scss">
.content {
  background-color: $background-gray;
  padding: 2rem 1rem;
  @media (min-width: 600px) {
    background-color: $white;
    padding: 3rem 4rem;
    max-width: 684px;
    margin: auto;
  }
}
</style>
