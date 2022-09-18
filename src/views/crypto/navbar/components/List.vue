<template>
  <div class="list-container">
    <list-item />
    <list-item />
    <list-item />
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'List',
  components: { ListItem },
}
</script>

<style lang="scss" scoped>

.list-container {
  flex-grow: 1;
  margin-top: 5rem;
}

</style>
