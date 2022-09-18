<template>
  <div class="contentBar-container">

    <div class="contentBar" />

  </div>
</template>

<script>
export default {
  name: 'ContentBar',
}
</script>

<style lang="scss" scoped>

.contentBar-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  .contentBar {
    flex-grow: 1;
    margin: 2rem 2rem 2rem 1rem;
    background-color: var(--white);
  }
}

</style>
