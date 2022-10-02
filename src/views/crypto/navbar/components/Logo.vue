<template>
  <div
      class="logo-container"
      :class="logoContainerMax ? 'logo-container-max' : 'logo-container-min'"
  >
    <img
      src="src/assets/icons/rocket.png"
      @click="toggleNavbar"
      alt="rocket logo"
      draggable="false"
    >
    <h2 v-if="logoContainerMax">CryptoApp</h2>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: 'Logo',
  emits: ['toggleNavbar'],
  setup(props: any, {emit}: any) {
    let logoContainerMax = ref<boolean>(true)
    const toggleNavbar = () => {
      emit('toggleNavbar')
      logoContainerMax.value = !logoContainerMax.value
    }

    return {
      logoContainerMax,
      toggleNavbar
    }
  },
}
</script>

<style lang="scss" scoped>

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  img {
    width: 80px;
    cursor: pointer;
    transition: transform .3s;
  }

  h2 {
    font-size: 24px;
  }
}

.logo-container-max {

  img {
    transform: rotate(0deg);
  }
}

.logo-container-min {

  img {
    transform: rotate(90deg);
  }
}

</style>
