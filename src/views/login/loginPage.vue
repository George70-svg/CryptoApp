<template>
  <h1>Login</h1>

  <div>
    <input type="text">
    <br>
    <input type="text">
    <br>
    <button>
      <router-link to="/crypto">Войти</router-link>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginPage',
}
</script>

<style scoped>

</style>
