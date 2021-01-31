<style>
.product-image{
    min-height: 200px;
}
.addtocart{
    width: 100% !important;
}
</style>
<template>
  <div class="container my-5 pt-5">
    <h2 class="text-center my-4 shop-title">Shop Page</h2>
    <Product/>
  </div>
</template>


<script>
import Product from './Product.vue'


export default {
  name: 'Shop',
  components:{
    Product,
  },


  
}
</script>
