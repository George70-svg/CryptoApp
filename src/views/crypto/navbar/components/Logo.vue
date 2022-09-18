<template>
  <div class="logo-container">
    <img src="src/assets/icons/rocket.png" alt="rocket logo" draggable="false">
    <h2>CryptoApp</h2>
  </div>
</template>

<script>
export default {
  name: 'Logo',
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
    transform: rotate(-45deg);
  }

  h2 {
    font-size: 24px;
  }
}

</style>
