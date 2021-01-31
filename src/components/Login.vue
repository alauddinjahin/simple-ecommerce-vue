<template>
<div class="auth-wrapper">
  <div class="auth-inner">

    <form @submit.prevent="handleLoginData">
        <ErrorMessage v-if="error" :error="error"/>
        <h3>Login</h3>

        <div class="form-group">
            <label for="email">Email<span class="text-danger ml-1">*</span></label>
            <input type="email" v-model="email" name="email" id="email" class="form-control" placeholder="Enter your Name">
        </div>

        <div class="form-group">
            <label htmlFor="password">Password<span class="text-danger ml-1">*</span></label>
            <input type="password" v-model="password" name="password" id="password" class="form-control" placeholder="Enter your Name">
        </div>
        
        <button class="btn btn-primary btn-block">Login</button>

        <p class="forgot-password">
            <router-link class="text-left" to="/register"> Register Here </router-link>

            <router-link class=" float-right text-right" to="/forgot"> Forgot Password ? </router-link>
        </p>
    </form>
      
  </div>
</div>
</template>


<script>
import axios from "axios"
import ErrorMessage from "./ErrorMessage";

export default {
  name: 'Login',
  components:{
    ErrorMessage,
  },
  data()
  {
    return{
      email   :"",
      password:"",
      error   :"",
    }
  },
  beforeMount() {
    if(localStorage.getItem('access_token'))
    {
      this.$router.push('/');
    }
  },
  methods:{

   async handleLoginData(){

      try 
      {
        const data ={
            email   :this.email,
            password:this.password
        };

        const response = await axios.post('/api/login',data);
        if(response)
        {
          // console.log(response)
          axios.defaults.headers.common['Authorization']=`Bearer ${response.data.token}`;
          const res   = await axios.get('/api/user');
          this.user   = res.data.user;
          this.$store.dispatch('user',this.user);

          localStorage.setItem('access_token',response.data.token);
          localStorage.setItem('user_ref',this.email);

          this.$router.push('/');

        }

      } catch (err) 
      {
        console.log(err)
        this.error = "Invalid Login Info!";
        setTimeout(()=> this.error="",2000)
      }

    }
  }

}
</script>
