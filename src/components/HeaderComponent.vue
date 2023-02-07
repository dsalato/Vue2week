<template>
  <div>
    <h2>Просто купить</h2>
    <nav>
      <router-link to="catalog">Каталог</router-link>
      <router-link to="basket">Корзина</router-link>
      <router-link to="order">Заказы</router-link>
    </nav>
    <nav>
      <router-link to="login">Вход</router-link>|<router-link to="register">Регистрация</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
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