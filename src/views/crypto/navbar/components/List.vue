<template>
  <div class="list-container">
    <tokens :listItemMax="navbarListMax"/>
    <portfolio :listItemMax="navbarListMax"/>
    <statistics :listItemMax="navbarListMax"/>
  </div>
</template>
statistics

<script lang="ts">
import Tokens from "@/views/crypto/navbar/components/Tokens.vue"
import Portfolio from "@/views/crypto/navbar/components/Portfolio.vue"
import Statistics from "@/views/crypto/navbar/components/Statistics.vue";

export default {
  name: 'List',
  components: {Statistics, Portfolio, Tokens},
  props: {
    navbarListMax: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.list-container {
  flex-grow: 1;
  margin-top: 5rem;
}

</style>
