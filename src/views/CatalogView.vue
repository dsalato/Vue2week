<template>
  <div class="product">
    <product-component class="product_item" v-for="prod in products.data" v-bind:key="prod.id" :prod-data="prod"></product-component>
  </div>
</template>

<script>
import ProductComponent from "@/components/ProductComponent.vue";
import axios from "axios";
export default {
  name: "CatalogView",
  components:{ProductComponent},
  data(){
    return{
      products:[],
    }
  },
  mounted() {
    axios.get(this.$store.state.API + 'products').then((response)=>{
      this.products = response.data
    })
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
}
.product_item{
  width: 41%;
}


</style>