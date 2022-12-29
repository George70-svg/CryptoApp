<template>
  <div class="tokenCards">
    <token-card
      v-for="token in tokenPrices"
      :token="token"
    />
  </div>
</template>

<script lang="ts">
import TokenCard from "@/views/crypto/content/TokensPage/components/TokenCard.vue"
import { PropType } from "vue";

export default {
  name: "TokenCards",
  components: { TokenCard },
  props: {
    tokenPrices: {
      type: Object as PropType<Map<string, string>>,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
  .tokenCards {
    display: grid;
    flex-basis: auto;
    padding-right: 1rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-500);
      border-radius: var(--b-radius-1);
    }
  }
</style>
