<template>
  <div>
    <form>
      <h1>Вход</h1>
      <div class="form_data">
        <label>Email</label>
        <input type="email" placeholder="Email">
      </div>
      <div class="form_data">
        <label>Password</label>
        <input type="password" placeholder="Password">
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
      login : null,
      password : null,

    }
  },
  methods: {

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