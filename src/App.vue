<template>
  <crypto-page />
  <router-view />
</template>

<script lang="ts">
import CryptoPage from '@/views/crypto/CryptoPage.vue'

export default {
  name: 'App',
  components: { CryptoPage },
  setup() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
  div {

    h1 {
      color: #535bf2;
    }
  }
</style>
