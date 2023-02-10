import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    token: localStorage.getItem('MyToken'),
    typeToken: 'Bearer ',
    API: 'https://jurapro.bhuser.ru/api-shop/',
    cart: [],
    order: [],
    cartCount: 0,

  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    AUTH_ERROR: (state) => {
      state.token = '';
    },
    auth_success: (state, token) => {
      state.token = token
    },
    cart_update: (state, load) => {
      state.cart = load
      state.cartCount = load.length
    },
    order_update:(state, load) => {
      state.order = load
    }
  },
  actions: {
    async to_order({commit}) {
      await axios.post(this.state.API + 'order' , {}, {headers: {Authorization: this.state.typeToken + this.state.token}})
    },
    async get_order({commit}) {
      await axios.get(this.state.API + 'order', {headers: {Authorization: this.state.typeToken + this.state.token}})
          .then((response) => {
            commit('order_update', response.data.data)
          })
    },

    async to_cart({commit}, product_id) {
      await axios.post(this.state.API + 'cart/' + product_id,  {}, {headers: {Authorization: this.state.typeToken + this.state.token}})
    },
    async get_cart({commit}) {
      await axios.get(this.state.API + 'cart', {headers: {Authorization: this.state.typeToken + this.state.token}})
          .then((response) => {
            commit('cart_update', response.data.data)
          })
    },
    async remove_cart({commit}, product_id) {
      await axios.delete(this.state.API + 'cart/' + product_id,  {headers: {Authorization: this.state.typeToken + this.state.token}})
    },
    async login({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'login', user).then((response) => {
          this.state.token = response.data.data.user_token
          localStorage.setItem('MyAppToken', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.typeToken + this.state.token}
          console.log(this.state.token)
          router.push('/')
        })
      } catch (e) {
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyToken');
      }
    },
    async register({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'signup', user).then((response) => {
          this.state.token = response.data.data.user_token
          localStorage.setItem('MyToken', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.typeToken + this.state.token}
          router.push('/')
        })
      } catch (e) {
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyAppToken');
      }
    },
    async logout(){
      localStorage.removeItem('MyToken', this.state.token)
      this.state.token = '';
      await axios.get(this.state.API + 'logout')
    }
  },
})
