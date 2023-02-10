<template>
  <div>
    <h2>Просто купить</h2>
    <nav>
      <router-link to="catalog">Каталог</router-link>
      <router-link @click="toCart" to="basket">Корзина</router-link>
      <router-link to="order" @click="toOrder">Заказы</router-link>
    </nav>
    <nav v-show="!this.$store.getters.isAuthenticated">
      <router-link to="login" @click="register">Вход</router-link>|<router-link to="register">Регистрация</router-link>
    </nav>
    <nav v-show="this.$store.getters.isAuthenticated">
      <router-link to="logout" @click="logout">Выход</router-link>
      <a class="navbar-link" href="#">
        Корзина ({{ $store.state.cartCount }})
      </a>
    </nav>


  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
    return {
      registers: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    toCart() {
      this.$store.dispatch('get_cart')
    },
    toOrder() {
      this.$store.dispatch('get_order')
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a {
  margin: 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: black;
  text-decoration: none;
}

</style>