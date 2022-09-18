<template>
  <div class="main-container">

    <nav-bar />
    <content-bar />

  </div>
</template>

<script>
import ContentBar from './content/ContentBar.vue'
import NavBar from './navbar/NavBar.vue'

export default {
  name: 'CryptoPage',
  components: { ContentBar, NavBar },
}
</script>

<style lang="scss" scoped>

  .main-container {
    width: 100vw;
    height: 100vh;
    background-image: url('src/assets/background/bg_2.png');
    background-size: cover;

    display: flex;
  }

</style>
