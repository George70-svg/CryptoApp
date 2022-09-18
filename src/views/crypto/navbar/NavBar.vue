<template>
  <div class="navBar-container">

    <div class="navBar">

      <logo />
      <list />
      <user />

    </div>

  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import List from './components/List.vue'
import User from './components/User.vue'

export default {
  name: 'NavBar',
  components: { User, List, Logo },
}
</script>

<style lang="scss" scoped>

.navBar-container {
  height: 100%;
  flex-grow: 0;
  display: flex;
  flex-direction: column;

  .navBar {
    width: 240px;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 1rem 2rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
  }
}

</style>
