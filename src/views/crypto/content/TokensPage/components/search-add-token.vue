<template>
  <div class="search-add-token-container">
    <div class="search-add-input">
      <input type="text">
      <button>
        <plus-outlined class="icon"/>
      </button>
    </div>

    <div class="add-badges">
      <token-badge v-for="token in defaultTokens" :token="token"/>
    </div>
  </div>
</template>

<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import {ref} from "vue";
import TokenBadge from "@/views/crypto/content/TokensPage/components/token-badge.vue";

export default {
  name: "SearchAddToken",
  components: {TokenBadge, PlusOutlined },
  setup() {
    const defaultTokens = ref<string[]>([ "BTC", "ETH", "USDT", "USDC" ])

    return {
      defaultTokens
    }
  }
}
</script>

<style scoped lang="scss">
  .search-add-token-container {

    .search-add-input {
      width: content-box;
      position: relative;
      display: flex;
      align-items: center;

      input {
        width: 22rem;
        height: 4rem;
        padding-left: 2rem;
        font-size: var(--fs-3);
        border-bottom-left-radius: 4rem;
        border-top-left-radius: 4rem;
        box-shadow: var(--secondary-shadow);
        border: none;
        outline:none;
      }

      button {
        position: relative;
        right: 2rem;
        height: 4rem;
        width: 4rem;
        background-color: var(--yellow);
        border: none;
        border-radius: 4rem;
        box-shadow: var(--half-hor-shadow);
        cursor: pointer;
        transition: background-color var(--default-transition);

        &:hover {
          background-color: var(--dark-yellow);
          transition: background-color var(--default-transition);
        }

        .icon {
          font-size: var(--fs-8);
          color: var(--white);
        }
      }
    }

    .add-badges {
      display: flex;
      margin-top: 1rem;
      justify-content: start;
    }
  }
</style>
