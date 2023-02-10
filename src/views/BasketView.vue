<template>
  <div class="basket">

        <div class="order">
          <h3>Оформить заказ</h3>
          <p>В корзине: {{$store.state.cart.length}} товаров</p>
          <p>Общая сумма заказа:  {{ fullSum }}</p>
          <button class="btn_order">Оформить</button>
        </div>
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
  data() {
    return {
      summ: 0
    }
  },
  computed: {
    fullSum() {
      this.summ = 0
      this.$store.state.cart.forEach(card => {
        this.summ += card.price
      })
      return this.summ
    }
  }
}
</script>

<style>
.basket{
  position: relative;
}
.order{
  position: absolute;
  z-index: 5;
  top: 0;
  right: 160px;
  display: inline-block;
  border: 2px solid darkolivegreen;
  padding: 20px 40px;
  width: 250px;

}
.btn_order{
  text-align: center;
  width: 50%;
  height: 15%;
  background-color: bisque;
  border: 1px solid rgba(114, 211, 49, 0.4);
  font-size: 16px;
  cursor: pointer;
  margin: 5px 0;
}
</style>