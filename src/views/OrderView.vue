<template>
  <div class="basket_inner" v-for="basket in $store.state.order">
      <h2>Номер заказа: {{basket.id}}</h2>
      <p>Количество товаров: {{basket.products.length}}</p>
      <p>Сумма заказа: {{basket.order_price}}</p>
  </div>
</template>

<script>
export default {
  name: "OrderView"
}
</script>

<style scoped>
div{
  background-color: rgba(114, 211, 49, 0.3);
  width: 25%;
  margin: 0 auto;
}
</style>