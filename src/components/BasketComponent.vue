<template>
  <div v-if="$store.state.cart.length > 0">
    <div class="basket_inner" v-for="basket in $store.state.cart">
      <h2>{{basket.name}}</h2>
      <p>Цена: {{basket.price}}</p>
      <p>Количество: </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketComponent",
}
</script>

<style scoped>
.basket_inner{
  height: 200px;
  width: 400px;
  background-color: rgba(114, 211, 49, 0.3);
  padding: 20px 30px 30px 30px;
  margin: 10px auto;

}

h2{
  font-size: 20px;
  color: rgba(29, 31, 27, 1);

}
p{
  font-size: 16px;
  color: rgba(29, 31, 27, 1);
}
.price{
  position: absolute;
  z-index: 3;
  bottom:-10px;
  left:0;
}
</style>