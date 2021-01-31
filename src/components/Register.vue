<template>
<div class="auth-wrapper">
<div class="auth-inner">
  <form @submit="handleSubmit">
      <ErrorMessage v-if="error" :error="error"/>
      <h3>Sign Up</h3>

      <div class="form-group">
          <label for="name">Name<span class="text-danger ml-1">*</span></label>
          <input type="text"  v-model="name" name="name" id="name" class="form-control" placeholder="Enter your Name"/>
      </div>

      <div class="form-group">
          <label for="email">Email<span class="text-danger ml-1">*</span></label>
          <input type="email"  v-model="email" name="email" id="email" class="form-control" placeholder="Enter your Name"/>
      </div>

      <div class="form-group">
          <label for="password">Password<span class="text-danger ml-1">*</span></label>
          <input type="password" v-model="password" name="password" id="password" class="form-control" placeholder="Enter your Name"/>
      </div>

      <div class="form-group">
          <label for="confirmpassword">Confirm Password<span class="text-danger ml-1">*</span></label>
          <input type="password" v-model="confirmpassword" name="confirmpassword" id="confirmpassword" class="form-control" placeholder="Enter your Name"/>
      </div>

      <button class="btn btn-primary btn-block">SignUp</button>
      <p class="forgot-password text-right">
          <router-link to="/login">Login Here</router-link>
      </p>

  </form>
</div>
</div>  
</template>


<script>

import axios from "axios";
import ErrorMessage from "./ErrorMessage";

export default {

  name: 'Register',
  components:{
    ErrorMessage,
  },
  data() {
    return {
      name            :"",
      email           :"",
      password        :"",
      confirmpassword :"",
      error           :""
    }
  },
  beforeMount() {
    if(localStorage.getItem('access_token'))
    {
      this.$router.push('/');
    }
  },
  methods:{

   async handleSubmit(e)
    {
      try 
      {
        e.preventDefault();
        if(this.password !== this.confirmpassword)
        {
          alert('Password and confirm password doesn\'t match');
          return false;
        }

        const data = {
          name      : this.name,
          email     : this.email,
          password  : this.password,
          password_confirmation: this.confirmpassword
        };

        await axios.post("/api/register",data);
        this.$router.push('/login');

      } catch (error) 
      {
        this.error=error.msg??"Error occurred!";
        setTimeout(()=> this.error="",2000)
      }

    }


  }



}
</script>
