<template>
  <div class="tokenPage">
    <search-add-token
      @showNewPrices="setNewPrices($event)"
    />
    <token-cards
      :tokenPrices="tokenPrices"
    />
  </div>
</template>

<script>
import { ref } from "vue"

import SearchAddToken from "@/views/crypto/content/TokensPage/components/SearchAddToken.vue"
import TokenCards from "@/views/crypto/content/TokensPage/components/TokenCards.vue";

export default {
  name: "TokensPage",
  components: {TokenCards, SearchAddToken},
  setup() {
    const tokenPrices = ref()

    const setNewPrices = (event) => {
      tokenPrices.value = event
    }

    return {
      tokenPrices,
      setNewPrices,
    }
  }
}
</script>

<style scoped lang="scss">
  .tokenPage {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
  }
</style>
