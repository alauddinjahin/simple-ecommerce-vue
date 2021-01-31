<template>
<div class="auth-wrapper">
    <div class="container my-5 pt-5">
      <Product/>
  </div>
</div>
</template>


<script>
import { mapGetters } from "vuex";
import Product from './Product.vue';

// getting parent component data with props 
export default {
  name: 'Home',
  components:{
    Product,
  },
  computed:{
      ...mapGetters(['user']) 
  }

}
</script>
