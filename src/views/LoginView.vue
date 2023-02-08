<template>
  <div>
    <form @submit.prevent="login">
      <h1>Вход</h1>
      <div class="form_data">
        <label for="username">Email</label>
        <input id="username" v-model="email" type="email" placeholder="Email">
      </div>
      <div class="form_data">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password">
      </div>
      <button>Войти</button>

    </form>
  </div>

</template>

<script>
export default {
  name: "LoginView",
  data(){
    return {
      email : null,
      password : null,

    }
  },
  methods: {
    login() {
      const userData = {
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password)),
      };
      this.$store
          .dispatch('login', userData)
    },

  }

}
</script>

<style scoped>
form{

}
input{
  width: 250px;
  padding: 12px 20px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
label{
  margin: 0 25px;
}
.form_data{
  width: 370px;
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