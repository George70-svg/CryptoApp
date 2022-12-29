<template>
  <div class="navBar-container">
    <div
        class="navBar"
        :class="navbarContainerMax ? 'navBar-max' : 'navBar-min'"
    >
      <logo @toggleNavbar="toggleNavbar"/>
      <list :navbarListMax="navbarContainerMax"/>
      <user :navbarUserMax="navbarContainerMax"/>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import List from './components/List.vue'
import User from './components/User.vue'
import {ref} from "vue";

export default {
  name: 'NavBar',
  components: { User, List, Logo },
  setup() {
    const navbarContainerMax = ref<boolean>(true)
    const toggleNavbar = () => {
      navbarContainerMax.value = !navbarContainerMax.value
    }

    return {
      navbarContainerMax,
      toggleNavbar
    }
  }
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
    border-radius: var(--b-radius-2);
    box-shadow: var(--primary-shadow);
  }

  .navBar-max {
    width: 240px;
  }

  .navBar-min {
    width: 80px;
  }
}

</style>
