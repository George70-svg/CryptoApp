<template>
  <div class="login-container">

    <div class="login">
      <div class="logo">
        <img src="src/assets/icons/rocket.png" alt="rocket logo">
        <h1>CryptoApp</h1>
      </div>

      <div class="form-container">
        <input type="text">
        <br>
        <input type="text">
        <br>
        <button>
          <router-link to="/crypto">Войти</router-link>
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginPage',
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
    border-radius: 25px;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;

      img {
        width: 150px;
        transform: rotate(-45deg);
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

      input {

      }

      button {

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

      .logo {
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

        input {

        }

        button {

        }
      }
    }
  }

}

</style>
