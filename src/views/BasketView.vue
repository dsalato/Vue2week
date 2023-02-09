<template>
  <div>
    <div class="basket_inner" v-if="$store.state.cart.length > 0">
      <basket-component></basket-component>
    </div>

    <div v-else>
      <a href="">
        Корзина пуста
      </a>
    </div>
  </div>
</template>

<script>
import ProductComponent from "@/components/ProductComponent";
import BasketComponent from "@/components/BasketComponent";

export default {
  name: "BasketView",
  components:{BasketComponent, ProductComponent},
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
}
.basket_inner{
  width: 41%;
}
</style>