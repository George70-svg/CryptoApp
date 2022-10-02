<template>
  <router-link active-class="active-item" to="/">
    <div class="listItem-container">
      <HomeOutlined
          class="icon"
          :class="listItemMax ? 'icon-max' : 'icon-min'"
      />
      <p v-if="listItemMax">Tokens</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Tokens',
  components: { HomeOutlined },
  props: {
    listItemMax: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.listItem-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.6rem 1rem;
  margin: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .3s;

  .icon {
    font-size: 26px;
    color: var(--primary-text-color);
  }

  .icon-max {

  }

  .icon-min {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    font-size: 16px;
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
