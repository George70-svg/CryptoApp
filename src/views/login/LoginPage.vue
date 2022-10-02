<template>
  <div class="login-container">

    <div class="login">
      <div class="logo-container">
        <img src="src/assets/icons/rocket.png" alt="rocket logo" draggable="false">
        <h1>CryptoApp</h1>
      </div>

      <div class="form-container">
        <a-input
          v-model="login"
          size="large"
          class="input"
          placeholder="Login"
        />

        <a-input-password
          v-model="password"
          size="large"
          class="input"
          placeholder="Password"
        />
      </div>

      <div class="button-container">
        <a-button
          type="primary"
          size="large"
          class="login-button"
          :disabled="false"
        >
          <router-link to="/crypto">Sign in</router-link>
        </a-button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'LoginPage',
  components: {},
  setup() {
    const login = ref<string>('')
    const password = ref<string>('')
    return {
      login,
      password,
    }
  },
}
</script>

<style lang="scss" scoped>

.login-container {
  width: 100vw;
  height: 100vh;
  background-image: url('src/assets/background/bg_1.png');
  background-size: cover;

  .login {
    max-width: 550px;
    width: 500px;
    min-height: 600px;
    height: 550px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: rgba(var(--background-light-color-with-opacity), var(--alpha));
    border-radius: 15px;

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;

      img {
        width: 150px;
      }

      h1 {

      }
    }

    .form-container {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .input {
        height: 60px;
        max-width: 400px;
        margin: 1rem;
        box-shadow: var(--primary-shadow);
      }
    }

    .button-container {
      text-align: center;
      margin-bottom: 4rem;

      .login-button {
        width: 200px;
        padding: 0;
        box-shadow: var(--primary-shadow);
      }
    }
  }
}

@media (screen and max-width: 767px) {

  .login-container {
    background-image: url('src/assets/background/bg_3.png');

    .login {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;

      background-color: inherit;
      border-radius: 0;

      .logo-container {
        margin: 0;

        img {
          width: 100px;
        }

        h1 {
          font-size: 28px;
          color: var(--thirtry-text-color);
        }
      }

      .form-container {
        flex-grow: 0;

        .input {

        }
      }

      .button-container {

        .login-button {

        }
      }
    }
  }

}

</style>
