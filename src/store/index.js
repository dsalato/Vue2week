import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    token: localStorage.getItem('MyAppToken'),
    API: 'https://jurapro.bhuser.ru/api-shop/',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    AUTH_ERROR: (state) => {
      state.token = '';
    },
  },
  actions: {
    async login({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'login', user).then((response) => {
          this.state.token = response.data.data.token
          localStorage.setItem('MyAppToken', this.state.token)
          axios.defaults.headers = {Authorisation: 'Bearer' + this.state.token}
          console.log(this.state.token)
          router.push('/')
        })
      } catch (e) {
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyAppToken');
      }
    },
    async register({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'signup', user).then((response) => {
          this.state.token = response.data.data.token
          localStorage.setItem('MyAppToken', this.state.token)
          axios.defaults.headers = {Authorisation: 'Bearer' + this.state.token}
          router.push('/')
        })
      } catch (e) {
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyAppToken');
      }
    },
    async logout(){
      this.state.token = '';
    }
  },
})
