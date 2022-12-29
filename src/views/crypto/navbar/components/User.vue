<template>
  <div
      class="userContainer"
      :class="navbarUserMax ? 'userContainerMax' : 'userContainerMin'"
  >
    <div class="avatar">
      <img src="src/assets/icons/avatar.jpg" alt="rocket logo" draggable="false">
    </div>

    <div v-if="navbarUserMax" class="name">
      <div class="userName">Anton</div>
      <div class="email">syuraev.anton@gmail.com</div>
    </div>

    <router-link to="/">
      <logout-outlined class="logoutIcon" />
    </router-link>

  </div>
</template>

<script>
import { LogoutOutlined } from '@ant-design/icons-vue'

export default {
  name: 'User',
  components: { LogoutOutlined },
  props: {
    navbarUserMax: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.userContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--grey-300);
  border-bottom-left-radius: var(--b-radius-2);
  border-bottom-right-radius: var(--b-radius-2);

  .avatar {

    img {
      width: 40px;
      border-radius: 50%;
    }
  }

  .name {
    flex-grow: 1;
    text-align: start;

    .userName {
      font-size: 14px;
      font-weight: bold;
    }

    .email {
      font-size: 12px;
    }
  }

  .logoutIcon {
    font-size: 20px;
    color: var(--primary-text-color);
  }
}

.userContainerMax {
  flex-direction: row;
}

.userContainerMin {
  flex-direction: column;
  padding: 0.5rem;

  .logoutIcon {
    margin-top: 0.5rem;
  }
}

</style>
