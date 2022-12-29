<template>
  <div class="searchAddToken">
    <div class="searchAddInput">
      <input
        type="text"
        v-model="currentToken"
        @keyup.enter="addSelectToken(currentToken)"
      >

      <button @click="addSelectToken(currentToken)">
        <plus-outlined class="icon"/>
      </button>
    </div>

    <div class="defaultBadges">
      <token-badge
        v-for="token in defaultTokens"
        :token="token"
        @click="setDefaultToken(token)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue"

import TokenBadge from "@/views/crypto/content/TokensPage/components/TokenBadge.vue"
import { PlusOutlined } from '@ant-design/icons-vue'
import { priceWebSocket, tokenPrices, tokenWebsockets } from "@/api/webSocket"

export default {
  name: 'SearchAddToken',
  components: { TokenBadge, PlusOutlined },
  emits: ['showNewPrices'],
  setup(props: any, context: { emit: (arg0: string, arg1: Map<string, string>) => void }) {
    const defaultTokens = ref<string[]>(['BTC', 'ETH', 'SOL', 'DOGE'])
    const currentToken = ref<string | null>(null)

    const addSelectToken =  (token: string) => {
      const tokenToLowerCase = token.toLowerCase()
      if(!tokenWebsockets.value.has(token)) {
        tokenWebsockets.value.set(tokenToLowerCase, priceWebSocket(tokenToLowerCase))
        tokenWebsockets.value.get(tokenToLowerCase)?.subscribeToSocket(tokenToLowerCase)
      }
    }

    const setDefaultToken = (token: string) => {
      currentToken.value = token
    }

    watch(tokenPrices.value, () => {
      context.emit('showNewPrices', tokenPrices.value)
    })

    return {
      defaultTokens,
      currentToken,
      addSelectToken,
      setDefaultToken,
    }
  }
}
</script>

<style scoped lang="scss">
.searchAddToken {
  flex-basis: 12%;

  .searchAddInput {
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
      outline: none;
    }

    button {
      position: relative;
      right: 2rem;
      height: 4rem;
      width: 4rem;
      background-color: var(--yellow);
      border: none;
      border-radius: var(--b-radius-8);
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

  .defaultBadges {
    display: flex;
    margin-top: 1rem;
    justify-content: start;
  }
}
</style>
