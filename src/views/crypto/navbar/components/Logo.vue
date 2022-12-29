<template>
  <div
      class="logoСontainer"
      :class="logoContainerMax ? 'logoContainerMax' : 'logoContainerMin'"
      @click="toggleNavbar"
  >
    <img
      src="src/assets/icons/rocket.png"
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

.logoСontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  cursor: pointer;

  img {
    width: 80px;
    transition: transform var(--default-transition);
  }

  h2 {
    font-size: 24px;
  }
}

.logoContainerMax {

  img {
    transform: rotate(0deg);
  }
}

.logoContainerMin {

  img {
    transform: rotate(90deg);
  }
}

</style>
