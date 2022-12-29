<template>
  <div class="contentBarContainer">

    <div class="contentBar">
      <router-view
          v-slot="{ Component }"
      >
        <component :is="Component" />
      </router-view>
    </div>

  </div>
</template>

<script>
import PortfolioPage from "@/views/crypto/content/PortfolioPage/PortfolioPage.vue"
import StatisticsPage from "@/views/crypto/content/StatisticsPage/StatisticsPage.vue"
import TokensPage from "@/views/crypto/content/TokensPage/TokensPage.vue"

export default {
  name: 'ContentBar',
  components: {TokensPage, StatisticsPage, PortfolioPage},
}
</script>

<style lang="scss" scoped>

.contentBarContainer {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  .contentBar {
    flex-grow: 1;
    margin: 2rem 1rem;
  }
}

</style>
