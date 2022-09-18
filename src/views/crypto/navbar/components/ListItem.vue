<template>
  <router-link active-class="active-item" to="/">
    <div class="listItem-container">
      <home-outlined class="icon" />
      <p>Tokens</p>
    </div>
  </router-link>
</template>

<script>
import { HomeOutlined } from '@ant-design/icons-vue'

export default {
  name: 'ListItem',
  components: { HomeOutlined },
}
</script>

<style lang="scss" scoped>

.listItem-container {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.6rem 1rem;
  margin: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .3s;

  .icon {
    font-size: 20px;
    color: var(--primary-text-color);
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: var(--primary-text-color);
    margin: 0 0 0 1rem;
  }

  &:hover {
    background-color: var(--light-blue);
    transition: background-color .3s;

    .icon {
      color: var(--white);
    }

    p {
      color: var(--white);
    }
  }
}

.active-item {

  .listItem-container {
    background-color: var(--blue);

    .icon {
      color: var(--white);
    }

    p {
      color: var(--white);
    }
  }
}

</style>
