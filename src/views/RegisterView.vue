<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Регистрация</h1>
      <div class="form_data">
        <label for="last_name">Фамилия</label>
        <input id="last_name" v-model="last_name" type="text" placeholder="Фамилия">
      </div>
      <div class="form_data">
        <label for="first_name">Имя</label>
        <input id="first_name" v-model="first_name" type="text" placeholder="Имя">
      </div>
      <div class="form_data">
        <label for="username">Логин</label>
        <input id="username" v-model="username" type="text" placeholder="Логин">
      </div>
      <div class="form_data">
        <label for="password">Пароль</label>
        <input id="password" v-model="password" type="password" placeholder="Пароль">
      </div>
      <div class="form_data">
        <label for="password_cons">Повторить пароль</label>
        <input id="password_cons" v-model="password_cons" type="password" placeholder="Повторить пароль">
      </div>
      <button type="submit">Войти</button>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RegisterView",
  data(){
    return{
      last_name: null,
      first_name:null,
      username:null,
      password:null,
      password_cons:null
    }
  },
  methods:{
     async handleSubmit(){
      const response = await axios.post('register', {
          last_name: this.last_name,
          first_name: this.first_name,
          username: this.username,
          password: this.password,
          password_cons: this.password_cons,

    });
          console.log(response)
    }
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