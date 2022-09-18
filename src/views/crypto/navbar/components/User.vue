<template>
  <div class="user-container">
    <div class="avatar">
      <img src="src/assets/icons/rocket.png" alt="rocket logo" draggable="false">
    </div>

    <div class="name">
      <div class="user-name">Anton</div>
      <div class="email">syuraev.anton@gmail.com</div>
    </div>

    <router-link to="/">
      <logout-outlined class="logout-icon" />
    </router-link>

  </div>
</template>

<script>
import { LogoutOutlined } from '@ant-design/icons-vue'

export default {
  name: 'User',
  components: { LogoutOutlined },
}
</script>

<style lang="scss" scoped>

.user-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--grey-300);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  .avatar {

    img {
      width: 40px;
    }
  }

  .name {
    flex-grow: 1;
    text-align: start;

    .user-name {
      font-size: 14px;
      font-weight: bold;
    }

    .email {
      font-size: 12px;
    }
  }

  .logout-icon {
    font-size: 20px;
    color: var(--primary-text-color);
  }
}

</style>
