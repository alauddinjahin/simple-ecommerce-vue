<template>
<div class="auth-wrapper">
    <div class="auth-inner">
      <h2 v-if="!user">PROFILE PAGE</h2>
      <div v-if="user">
        <h2>Hi, {{ user.name }}</h2>
        <span style="font-size:16px;">You are logged in!</span>
      </div>
  </div>
</div>
</template>


<script>
import { mapGetters } from "vuex";

// getting parent component data with props 
export default {
  name: 'Profile',
  computed:{
      ...mapGetters(['user']) 
  }

}
</script>
