<template>
<div class="auth-wrapper">
  <div class="auth-inner">
  <form @submit.prevent="handleSubmit">
      <h3>Forgot Password</h3>

      <div class="form-group">
          <label for="email">Email<span class="text-danger ml-1">*</span></label>
          <input type="email" v-model="email" name="email" id="email" class="form-control" placeholder="Enter your Email"/>
      </div>
      
      <button class="btn btn-primary btn-block">Send</button>
  </form>
  </div>
</div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'Forgot',
  data()
  {
    return {
      email: "",
    }
  },
  methods:{
    async handleSubmit(){

      const response =  await axios.post('/api/forgot',{
        email: this.email
      });
      
      console.log(response)
    }
  }
}
</script>
