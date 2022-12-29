<template>
  <div class="token-badge">
    {{ token }}
  </div>
</template>

<script>
export default {
  name: "TokenBadge",
  props: {
    token: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
  .token-badge {
    width: 5rem;
    height: 2rem;
    margin-right: 1.3rem;
    font-size: var(--fs-1);
    font-weight: 500;
    line-height: 2rem;
    background-color: var(--white);
    box-shadow: var(--small-shadow);
    border-radius: var(--b-radius-2);;
    text-align: center;
    cursor: pointer;
    transition: all var(--default-transition);

    &:hover {
      box-shadow: var(--primary-shadow);
      transition: all var(--default-transition);
    }
  }
</style>
