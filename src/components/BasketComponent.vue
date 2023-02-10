<template>

    <div class="basket_inner" v-for="basket in $store.state.cart">
      <button @click="remove_cart(basket)">&times</button>
      <h2>{{basket.name}}</h2>
      <p class="price">Цена: {{basket.price}}</p>
    </div>
</template>

<script>
export default {
  name: "BasketComponent",
  methods:{
    remove_cart(card){
      this.$store.dispatch('remove_cart', card.id)
      this.$store.dispatch('get_cart')
    }
  },

}
</script>

<style scoped>
.basket_inner{
  height: 100px;
  width: 23%;
  background-color: rgba(114, 211, 49, 0.3);
  padding: 10px 30px 30px 30px;
  margin: 10px auto;
  position: relative;

}
button{
  position: absolute;
  z-index: 3;
  top:25px;
  right:10px;
  background-color: darkolivegreen;
  color: white;
  border-radius: 50%;
  font-width:bold;
  border: 1px solid gainsboro;
}
h2{
  font-size: 18px;
  color: rgba(29, 31, 27, 1);

}
p{
  font-size: 16px;
  color: rgba(29, 31, 27, 1);
}
.price{
  position: absolute;
  z-index: 3;
  bottom:10px;
  right:30px;
}

</style>