<template>
  <div class="basket_inner" v-for="basket in $store.state.order">
      {{basket}}
  </div>
</template>

<script>
export default {
  name: "OrderView"
}
</script>

<style scoped>

</style>