<template>
  <div class="product_component">
    <div class="product_com">
        <h2>{{prodData.name}}</h2>
        <p>Описание: {{prodData.description}}</p>
        <p class="price">Цена: {{prodData.price}}</p>
        <button @click="addToCart(prodData)" v-if="this.$store.state.token">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ['prodData'],
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    }
  }
}
</script>

<style scoped>
.product_component{
  height: 200px;
  width: 400px;
  background-color: rgba(114, 211, 49, 0.3);
  padding: 30px;
  margin: 10px;

}
.product_com{
  margin: 0 auto;
  position: relative;
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
button{
  position: absolute;
  z-index: 2;
  bottom:0;
  right:0;
  text-align: center;
  width: 30%;
  height: 15%;
  background-color: bisque;
  border: 1px solid rgba(114, 211, 49, 0.4);
  font-size: 18px;
  cursor: pointer;

}
button:hover{
  border: 1px solid darkolivegreen;
}
</style>