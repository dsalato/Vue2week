<template>
  <div>
    <form @submit.prevent="register">
      <h1>Регистрация</h1>
      <div class="form_data">
        <label for="fio">ФИО</label>
        <input id="fio" v-model="fio" type="text" placeholder="ФИО">
      </div>
      <div class="form_data">
        <label for="username">Почта</label>
        <input id="username" v-model="email" type="text" placeholder="Почта">
      </div>
      <div class="form_data">
        <label for="password">Пароль</label>
        <input id="password" v-model="password" type="password" placeholder="Пароль">
      </div>
      <button type="submit">Войти</button>

    </form>
  </div>
</template>

<script>

export default {
  name: "RegisterView",
  data(){
    return{
      fio:null,
      email:null,
      password:null
    }
  },
  methods:{
    register() {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };
      this.$store
          .dispatch('register', userData)
    },
  }
}
</script>

<style scoped>
input{
  width: 250px;
  padding: 12px 20px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form_data{
  width: 430px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

button{
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100px;
}
</style>