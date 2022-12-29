<template>
  <div class="card">
    <div class="card-header">
      <p>{{ actualToken.name }}</p>

      <close-outlined
        class="icon"
        @click="closeToken(actualToken.name)"
      />
    </div>

    <div class="card-center">
      <p>{{ actualToken.price }}</p>
    </div>

    <div class="card-footer">

    </div>
  </div>
</template>

<script lang="ts">
import { PropType, ref, watch } from "vue"

import { CloseOutlined } from "@ant-design/icons-vue";
import { tokenWebsockets } from "@/api/webSocket";
import { getIndexAfterDote } from "@/utils/functions";

export default {
  name: "TokenCard",
  components: { CloseOutlined },
  props: {
    token: {
      type: Object as PropType<[ string, string ]>,
      required: true,
    }
  },
  setup(props: any) {
    const currentToken = ref({
      name: props.token[0].toUpperCase(),
      price: "00.00",
    })

    const actualToken = ref({
      name: props.token[0].toUpperCase(),
      price: "00.00",
    })

    let name = "No name"
    let price = "No price"

    watch(() => props.token, async () => {
      getCurrentToken(props.token)
    })

    //Токен, который будет виден пользователю и обновляться каждую секунду
    const getActualToken = setInterval(() => {
      actualToken.value = currentToken.value
    } , 1000)

    //Токен, который будет получен в реальном времени от вебсокета
    const getCurrentToken = (token: [ string, string ]) => {
      if (token || token[0] || token[1]) {
        return
      }

      const indexOfDote = getIndexAfterDote(token[1])

      if(indexOfDote) {
        name = token[0].toUpperCase()
        price = `$${token[1].slice(0, indexOfDote + 3)}`
        currentToken.value = { name, price }
      }
    }

    const closeToken = (token: string) => {
      const tokenToLowerCase = token.toLowerCase()
      tokenWebsockets.value.get(tokenToLowerCase)?.closeSocket(tokenToLowerCase)
      clearInterval(getActualToken)
    }

    return {
      currentToken,
      actualToken,
      closeToken,
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    min-height: 216px;
    color: var(--primary-text-color);
    border-radius: var(--b-radius-2);
    background-color: var(--white-opacity);
    box-shadow: var(--primary-shadow);

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: 20%;
      width: 100%;
      padding: 0 0.5rem;

      p {
        margin: 0;
        font-size: var(--fs-4);
        font-weight: bold;
      }

      .icon {
        display: block;
        font-size: var(--fs-4);
      }
    }

    .card-center {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      color: var(--secondary-text-color);

      p {
        margin: 0;
        font-size: var(--fs-8);
        font-weight: bold;
      }
    }

    .card-footer {
      flex-basis: 20%;
    }
  }
</style>
